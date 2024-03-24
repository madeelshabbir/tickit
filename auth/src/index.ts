import 'express-async-errors';;
import mongoose from 'mongoose';
import { app } from './app';

const start = async () => {
  if (!process.env.JWT_KEY) {
    return new Error('JWT_KEY must be defined');
  }
  if (!process.env.MONGO_URI) {
    return new Error('MONGO_URI must be defined');
  }

  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to Mongodb');
  }
  catch (err) {
    console.log(err);
  }
};

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});

start();
