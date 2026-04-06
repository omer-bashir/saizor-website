import express from 'express';
import contactRouter from './contact.js';
import chatRouter from './chat.js';

export default function routes() {
  const router = express.Router();
  router.use('/contact', contactRouter);
  router.use('/chat', chatRouter);
  return router;
}
