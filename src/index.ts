import cors from 'cors';
import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: 'http://localhost:8000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

mongoose.connect(process.env.MONGODB_URL!)
.then(() => console.log('Database connection success'))
.catch(() => console.error('Failed to connect to database'));

app.use(express.json());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
