import { convertSpeechToText } from "../utils/video.js";
import { summarizeTranscript } from "../utils/summarize.js";
/**
 *
 * @param {*} req
 * @param {*} res
 */
export const uploadVideo = async (req, res) => {
  res.status(200).json({ message: "uploaded successfully" });
  console.log("uploaded successfully, calling convertSpeechToText");
  let response = await convertSpeechToText(req.file.filename);
  let text = response.text;
  console.log("speech converted to text, next calling summarizeTranscript");
  let summary = await summarizeTranscript(text);
  console.log(summary);
};
