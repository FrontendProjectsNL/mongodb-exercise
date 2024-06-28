import mongoose from 'mongoose';

const schema = new mongoose.schema({
  title: String,
  body: String,
});

export default mongoose.models.mybooks || mongoose.model('mybooks', schema);
