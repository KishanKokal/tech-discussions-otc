import mongoose from 'mongoose';

const upcomingEventsSchema = mongoose.Schema({
  title: {type: String, required:true},
  description: {type: String, required:true},
  link: {type: String, required:true},
  meetDate: {type: Date, required:true, default: Date.now},
  time:{type: String, required:true},
  
});

export default mongoose.model('upcomingEvents',upcomingEventsSchema );