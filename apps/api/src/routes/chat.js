import express from 'express';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { extractText } from 'unpdf';
import Anthropic from '@anthropic-ai/sdk';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PDF_PATH = path.resolve(__dirname, '../../../../documents/Saizor_AI_Knowledge_Guide_2026 (2).pdf');

let pdfContext = 'Knowledge base unavailable';

try {
  const pdfBuffer = readFileSync(PDF_PATH);
  const { text } = await extractText(new Uint8Array(pdfBuffer), { mergePages: true });
  pdfContext = text;
  console.log(`Chat route loaded — PDF context ready (${pdfContext.length} chars)`);
} catch (err) {
  console.error('Failed to load PDF knowledge base:', err.message);
}

const client = new Anthropic();

const router = express.Router();

router.post('/', async (req, res) => {
  const { message, history = [] } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'message is required' });
  }

  const systemPrompt = `You are a friendly and knowledgeable assistant for Saizor, an AI consulting company.
Answer questions using ONLY the knowledge base content provided below.
If the answer is not in the knowledge base, respond with:
'I don't have that information — please contact us at saizor.com for more details.'
Keep answers concise, clear, and professional.

KNOWLEDGE BASE:
${pdfContext}`;

  try {
    const messages = [
      ...history,
      { role: 'user', content: message },
    ];

    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1024,
      system: systemPrompt,
      messages,
    });

    const reply = response.content[0].text;
    return res.json({ reply });
  } catch (err) {
    console.error('Claude API error:', err.message);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
});

export default router;
