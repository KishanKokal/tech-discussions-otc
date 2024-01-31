import express from "express";
import cors from "cors";
import { json, urlencoded } from "express";
import morgan from "morgan";
import mongoose from 'mongoose';
import VideoRouter from "./resources/video/video.router.js";
import SummaryRouter from "./resources/summary/summary.router.js";
import upcomingEventsModel from "./resources/upcomingEvents/upcomingEvents.model.js";
export const app = express();

app.disable("x-powered-by");
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/video", VideoRouter);
app.use("/api/summary", SummaryRouter);

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Controller for handling POST requests to create events
app.post('/upcomingEvents', async (req, res) => {
    console.log("Reached");
    console.log(req.body);
  try {
    // Create a new UpcomingEvents instance with data from the request body
    const newEvent = new upcomingEventsModel({
      title: req.body.title,
      description: req.body.description,
      link: req.body.link,
      meetDate: req.body.meetDate || Date.now(),
      time: req.body.time,
    });

    // Save the event to the database
    const savedEvent = await newEvent.save();

    res.status(201).json(savedEvent); // Respond with the saved event data
  } catch (error) {
    console.error('Error saving upcoming event:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


export const start = () => {
  app.listen(3000, () => {
    console.log("Server is ruqgqerge1rgnning on port 3000");
  });
};
