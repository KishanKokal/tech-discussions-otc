import { AssemblyAI } from "assemblyai";
import "dotenv/config";

const client = new AssemblyAI({
  apiKey: process.env.ASSEMBLYAI_API_KEY,
});

const VIDEOS_FOLDER = "./videos/";

export const convertSpeechToText = async (filename) => {
  let path = VIDEOS_FOLDER + filename;
  let transcript = await client.transcripts.transcribe({
    audio: path,
  });
  return transcript;
};
