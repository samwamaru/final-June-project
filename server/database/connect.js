
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const connectDatabase = async () => {
  try {
    //const uri = "mongodb+srv://sammwangi268:<password>@sammwangi.mim4quv.mongodb.net/?retryWrites=true&w=majority&appName=sammwangi";

    await mongoose.connect("mongodb+srv://sammwangi268:H9KfRTEUGImvnfE0@sammwangi.mim4quv.mongodb.net/?retryWrites=true&w=majority&appName=sammwangi");
    console.log("MongoDB connected successfully!");
  } catch (err) {
    console.log(`Mongo connection error: ${err}`);
  }
};

export default connectDatabase;
