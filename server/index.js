import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { MongoClient, ServerApiVersion } from 'mongodb';
import { sendEmail } from '../utils/email.js';
import { generateChatReply } from '../utils/chatbot.js';

dotenv.config({ path: ".env.local" });
dotenv.config();

const app = express();
const port = process.env.PORT || 5174;

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ?.split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

const hasMongoUri = Boolean(process.env.MONGODB_URI?.trim());
const mongoClient = hasMongoUri
  ? new MongoClient(process.env.MONGODB_URI, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    })
  : null;

let messagesCollection = null;
let messagesApiEnabled = false;

async function connectDatabase() {
  if (!mongoClient) {
    console.warn(
      'MONGODB_URI is not configured. /api/messages will be disabled, but /api/chat will still work.',
    );
    return;
  }

  await mongoClient.connect();
  const databaseName = process.env.MONGODB_DB_NAME || 'portfolio';
  const collectionName = process.env.MONGODB_COLLECTION || 'incomming';

  const database = mongoClient.db(databaseName);
  messagesCollection = database.collection(collectionName);

  await messagesCollection.createIndex({ createdAt: -1 });
  messagesApiEnabled = true;
  console.log(
    `Connected to MongoDB "${databaseName}" using collection "${collectionName}".`,
  );
}

app.use(
  cors({
    origin: allowedOrigins?.length ? allowedOrigins : '*',
  }),
);
app.use(express.json({ limit: '250kb' }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body || {};
    const cleanMessage = String(message || '').trim();

    if (!cleanMessage) {
      return res.status(400).json({ error: 'Message is required.' });
    }

    if (cleanMessage.length > 1200) {
      return res
        .status(400)
        .json({ error: 'Message is too long. Please keep it under 1200 characters.' });
    }

    const chatResponse = await generateChatReply({
      message: cleanMessage,
      history: Array.isArray(history) ? history : [],
    });

    return res.status(200).json(chatResponse);
  } catch (error) {
    console.error('Error generating chat response', error);
    return res.status(500).json({ error: 'Failed to generate chatbot response.' });
  }
});

app.post('/api/messages', async (req, res) => {
  if (!messagesApiEnabled || !messagesCollection) {
    return res.status(503).json({
      error:
        'Message API is not configured locally. Set MONGODB_URI and restart the server.',
    });
  }

  try {
    const { name, email, message } = req.body || {};

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res
        .status(400)
        .json({ error: 'Name, email, and message are required.' });
    }

    const entry = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      createdAt: new Date(),
    };

    const result = await messagesCollection.insertOne(entry);
    const emailResult = await sendEmail(entry.name, entry.email, entry.message);
    if (!emailResult.success) {
      console.error('Resend email failed:', emailResult.error);
    }

    res.status(201).json({
      message: 'Message stored successfully.',
      id: result.insertedId,
      createdAt: entry.createdAt,
      emailSent: emailResult.success,
      emailError: emailResult.success ? undefined : String(emailResult.error),
    });
  } catch (error) {
    console.error('Error saving message', error);
    res.status(500).json({ error: 'Failed to save message. Please try again.' });
  }
});

app.get('/api/messages', async (req, res) => {
  if (!messagesApiEnabled || !messagesCollection) {
    return res.status(503).json({
      error:
        'Message API is not configured locally. Set MONGODB_URI and restart the server.',
    });
  }

  try {
    const limitParam = Number.parseInt(req.query.limit, 10);
    const limit = Number.isFinite(limitParam) ? Math.min(limitParam, 100) : 25;

    const messages = await messagesCollection
      .find({})
      .sort({ createdAt: -1 })
      .limit(limit)
      .toArray();

    res.json({ messages });
  } catch (error) {
    console.error('Error fetching messages', error);
    res.status(500).json({ error: 'Failed to fetch messages.' });
  }
});

async function startServer() {
  try {
    await connectDatabase();
  } catch (error) {
    console.error('Database connection failed. Continuing with chat-only mode.', error);
  }

  app.listen(port, () => {
    console.log(`API server ready on http://localhost:${port}`);
  });
}

startServer();

async function shutdown() {
  try {
    if (mongoClient) {
      await mongoClient.close();
    }
  } finally {
    process.exit(0);
  }
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
