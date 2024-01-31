import mongoose from 'mongoose';

const summarySchema = mongoose.Schema({
  summaryId: {type: String, required:true},
});

export default mongoose.model('Summary',summarySchema );