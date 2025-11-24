import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { MongoClient, ServerApiVersion } from 'mongodb';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const port = process.env.PORT || 5174;
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
const emailFrom = process.env.EMAIL_FROM || emailUser;
const emailTo = process.env.EMAIL_TO;

if (!process.env.MONGODB_URI) {
  console.error('Missing MONGODB_URI in environment');
  process.exit(1);
}

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ?.split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

const mongoClient = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let messagesCollection;
let mailer;

if (emailUser && emailPass && emailTo) {
  mailer = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  // Verify the transport at startup to surface credential/network issues early.
  mailer
    .verify()
    .then(() => {
      console.log('Email transport verified: ready to send notifications.');
    })
    .catch((error) => {
      console.error('Email transport verification failed:', error.message);
    });
} else {
  console.warn(
    'Email notifications are disabled. Set EMAIL_USER, EMAIL_PASS, and EMAIL_TO to enable.',
  );
}

async function sendEmailNotification(entry) {
  if (!mailer) return;
  const subject = `New portfolio message from ${entry.name}`;
  const text = `You received a new message from your portfolio site.

Name: ${entry.name}
Email: ${entry.email}
Sent: ${entry.createdAt.toISOString()}

Message:
${entry.message}`;

  try {
    await mailer.sendMail({
      from: `"Portfolio Contact" <${emailFrom}>`,
      to: emailTo,
      replyTo: `${entry.name} <${entry.email}>`, // allows replying directly to the sender
      subject,
      text,
    });
  } catch (error) {
    console.error('Error sending notification email:', error.message);
    if (error.response) {
      console.error('SMTP response:', error.response.toString());
    }
  }
}

async function connectDatabase() {
  await mongoClient.connect();
  const databaseName = process.env.MONGODB_DB_NAME || 'portfolio';
  const collectionName = process.env.MONGODB_COLLECTION || 'incomming';

  const database = mongoClient.db(databaseName);
  messagesCollection = database.collection(collectionName);

  await messagesCollection.createIndex({ createdAt: -1 });
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

app.post('/api/messages', async (req, res) => {
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
    sendEmailNotification(entry).catch(() => {});

    res.status(201).json({
      message: 'Message stored successfully.',
      id: result.insertedId,
      createdAt: entry.createdAt,
    });
  } catch (error) {
    console.error('Error saving message', error);
    res.status(500).json({ error: 'Failed to save message. Please try again.' });
  }
});

app.get('/api/messages', async (req, res) => {
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

connectDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`API server ready on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to start API server:', error);
    process.exit(1);
  });

async function shutdown() {
  try {
    await mongoClient.close();
  } finally {
    process.exit(0);
  }
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
