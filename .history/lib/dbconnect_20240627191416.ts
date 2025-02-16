import mongoose from 'mongoose';
import React from 'react';

const dbconnect = async () => {
  const mybooks = new mongoose.Schema({
    title: String, // String is shorthand for {type: String}
    author: String,
    body: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs: Number,
    },
  });
};

export default dbconnect;
