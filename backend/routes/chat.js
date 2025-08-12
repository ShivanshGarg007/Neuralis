const express = require("express");
const router = express.Router();
const { OpenAI } = require("openai");
require("dotenv").config();

const openai = new OpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

// Dynamic system prompt for more professional and systematic responses
const systemPrompt = `
You are Neuralis, an advanced AI assistant. Always provide clear, concise, and professional answers. 
Format your responses in a systematic way, using bullet points, numbered lists, or sections when appropriate. 
If the user asks a question, start with a brief summary, then provide details in a structured format. 
Use markdown for formatting (e.g., **bold**, _italic_, lists, code blocks). 
If the question is ambiguous, ask clarifying questions.
`;

router.post("/", async (req, res) => {
  const { message } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "llama3-8b-8192", // or "llama3-70b-8192", "mixtral-8x7b-32768"
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ],
      temperature: 0.7,
    });

    // Optionally, post-process the response to ensure markdown formatting
    let response = completion.choices[0].message.content;
    // Remove leading/trailing whitespace
    response = response.trim();

    res.json({ response });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch from Groq." });
  }
});

module.exports = router;

