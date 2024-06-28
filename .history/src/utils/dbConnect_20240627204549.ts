import mongoose from 'mongoose';

export const dbConnect = async () => {
  try {
    const res = await mongoose.connect(
      'mongodb+srv://EA2009:<UTKgzg3Nmt2Olddl>@cluster0.mb8kibd.mongodb.net/'
    );
    console.log('================ Database connected ==================');
  } catch (err) {
    console.log("=============== Couldn't connect to database!!! ==========");
  }
};
