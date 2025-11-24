import { MongoClient, ServerApiVersion } from 'mongodb';
import nodemailer from 'nodemailer';

// Cache Mongo client across invocations to avoid reconnecting.
let cachedClient;
let cachedCollection;
let cachedMailer;

function getAllowedOrigins() {
  return (process.env.ALLOWED_ORIGINS || '')
    .split(',')
    .map((o) => o.trim())
    .filter(Boolean);
}

function setCors(res, origin) {
  const allowedOrigins = getAllowedOrigins();
  if (allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
  } else {
    res.setHeader('Access-Control-Allow-Origin', allowedOrigins[0]);
  }
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, X-Requested-With',
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
}

async function getCollection() {
  if (cachedCollection) return cachedCollection;

  if (!process.env.MONGODB_URI) {
    throw new Error('Missing MONGODB_URI in environment');
  }

  if (!cachedClient) {
    cachedClient = new MongoClient(process.env.MONGODB_URI, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    await cachedClient.connect();
  }

  const databaseName = process.env.MONGODB_DB_NAME || 'portfolio';
  const collectionName = process.env.MONGODB_COLLECTION || 'incomming';
  const db = cachedClient.db(databaseName);
  cachedCollection = db.collection(collectionName);
  await cachedCollection.createIndex({ createdAt: -1 });
  return cachedCollection;
}

async function getMailer() {
  if (cachedMailer) return cachedMailer;

  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const emailTo = process.env.EMAIL_TO;

  if (!emailUser || !emailPass || !emailTo) {
    return null;
  }

  cachedMailer = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  try {
    await cachedMailer.verify();
  } catch (error) {
    console.error('Email transport verification failed:', error.message);
  }

  return cachedMailer;
}

async function sendEmailNotification(entry) {
  const mailer = await getMailer();
  if (!mailer) return;

  const emailFrom = process.env.EMAIL_FROM || process.env.EMAIL_USER;
  const emailTo = process.env.EMAIL_TO;

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
      replyTo: `${entry.name} <${entry.email}>`,
      subject,
      text,
    });
  } catch (error) {
    console.error('Error sending notification email:', error.message);
  }
}

export default async function handler(req, res) {
  const origin = req.headers.origin || '*';
  setCors(res, origin);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const collection = await getCollection();

    if (req.method === 'GET') {
      const limitParam = Number.parseInt(req.query.limit, 10);
      const limit = Number.isFinite(limitParam) ? Math.min(limitParam, 100) : 25;

      const messages = await collection
        .find({})
        .sort({ createdAt: -1 })
        .limit(limit)
        .toArray();

      return res.status(200).json({ messages });
    }

    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

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

    const result = await collection.insertOne(entry);
    sendEmailNotification(entry).catch(() => {});

    return res.status(201).json({
      message: 'Message stored successfully.',
      id: result.insertedId,
      createdAt: entry.createdAt,
    });
  } catch (error) {
    console.error('Error handling /api/messages:', error);
    return res
      .status(500)
      .json({ error: 'Failed to process request. Please try again.' });
  }
}
