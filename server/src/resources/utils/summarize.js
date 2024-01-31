import OpenAI from "openai";
import "dotenv/config";
import { SYSTEM_MESSAGE } from "./static.js";
import fs from "node:fs";

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

export const saveSummaryFile = async (content, filename) => {
  const filePath =
    "./summaries/" + filename.slice(0, filename.length - 4) + ".adoc";
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log(`File ${filePath} written successfully!`);
    }
  });
};
