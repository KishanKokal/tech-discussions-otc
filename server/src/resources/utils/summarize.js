import OpenAI from "openai";
import "dotenv/config";
import { SYSTEM_MESSAGE } from "./static.js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const summarizeTranscript = async (transcript) => {
  const history = [
    {
      role: "system",
      content: SYSTEM_MESSAGE,
    },
  ];

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [...history, { role: "user", content: transcript }],
    temperature: 0.7, // 0 = no creativity. 1 = lots of creativity
  });
  return response.choices[0].message;
};
