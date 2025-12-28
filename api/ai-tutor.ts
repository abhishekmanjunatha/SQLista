import type { VercelRequest, VercelResponse } from '@vercel/node';
import { OpenAI } from 'openai';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { provider, apiKey, query, error, schema, context } = req.body;

    if (!apiKey) {
      return res.status(401).json({ error: 'Missing API Key' });
    }

    const systemPrompt = `
You are a friendly and helpful SQL tutor for a Data Engineering practice platform.
Your goal is to help the user fix their SQL query or understand a concept WITHOUT giving them the direct answer code.
Use the Socratic method: ask guiding questions, explain the error in simple terms, or provide a similar example.

Context:
- The user is working on a challenge: "${context?.title || 'Unknown'}"
- Task: "${context?.task || 'Unknown'}"
- Schema: ${JSON.stringify(schema)}

User's Query:
${query}

Error Message:
${error}

Instructions:
1. Analyze the error and the query.
2. Explain *why* the error happened.
3. Give a hint on how to fix it.
4. DO NOT write the corrected SQL query for them.
5. Keep it short (max 3 sentences).
`;

    let responseText = '';

    if (provider === 'groq') {
      const openai = new OpenAI({ 
        apiKey, 
        baseURL: 'https://api.groq.com/openai/v1' 
      });
      const completion = await openai.chat.completions.create({
        // Updated to latest supported model
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: 'Please help me.' }],
      });
      responseText = completion.choices[0].message.content || 'No response';
    } else {
      return res.status(400).json({ error: 'Only Groq is supported currently.' });
    }

    return res.status(200).json({ text: responseText });

  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}
