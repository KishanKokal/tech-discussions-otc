import OpenAI from "openai";
import "dotenv/config";
import { SYSTEM_MESSAGE } from "./static.js";
import fs from "node:fs";
import summarySchema from "../summary/summary.model.js";

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
  const filePath = "./summaries/" + filename.slice(0, filename.length - 4) + ".adoc";
  
  try {
    // Use fs.promises.writeFile to write the file asynchronously
    await fs.promises.writeFile(filePath, content);
    console.log(`File ${filePath} written successfully!`);

    // Add the file to the database
    const newSummary = new summarySchema({
      summaryId: filename.slice(0, filename.length - 4),
      filename: filename,  // Assuming you want to add the filename to the database
    });

    // Save it
    await newSummary.save();
  } catch (err) {
    console.error("Error writing to file or saving to the database:", err);
  }
};
