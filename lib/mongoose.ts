import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("MONGODB_URL not found");

  if (isConnected) return console.log("Already connected with mongodb");

  try {
    mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;

    console.log("Mongodb connected");
  } catch (error) {
    console.log(error);
  }
};
