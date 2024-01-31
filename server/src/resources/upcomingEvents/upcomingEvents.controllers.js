import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import "dotenv/config";
import UpcomingEvents from './models/upcomingEvents'; // Adjust the path based on your project structure

const app = express();
const PORT = 3000; // Set your desired port

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// Controller for handling POST requests to create events
app.post('/upcomingEvents', async (req, res) => {
    console.log("Reached");
    console.log(req.body);
  try {
    // Create a new UpcomingEvents instance with data from the request body
    const newEvent = new UpcomingEvents({
      title: req.body.title,
      description: req.body.description,
      link: req.body.link,
      meetDate: req.body.meetDate || Date.now(),
    });

    // Save the event to the database
    const savedEvent = await newEvent.save();

    res.status(201).json(savedEvent); // Respond with the saved event data
  } catch (error) {
    console.error('Error saving upcoming event:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


