import mongoose from 'mongoose';

export const dbConnect = async () => {
  try {
    const res = await mongoose.connect();
    console.log('================ Database connected ==================');
  } catch (err) {
    console.log("=============== Couldn't connect to database!!! ==========");
  }
};
