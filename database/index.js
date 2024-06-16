import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectionString = process.env.CONNECTION_STRING;

const connectToDb = async () => {
  try {
    await mongoose.connect(connectionString)
    console.log("Database connect success!");
  } catch (error) {
    console.log(error);
  }
}

export default connectToDb;