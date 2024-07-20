import mongoose, { ConnectOptions } from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    return console.log("MONGODB_URL is not defined");
  }

  if (isConnected) {
    console.log("Aleady connected to database");
  }

  try {
    const options: ConnectOptions = {
      dbName: "nextjs-api",
      autoCreate: true,
    };

    await mongoose.connect(process.env.MONGODB_URL, options);
    console.log("Connected to database");
    isConnected = true;
  } catch (err) {
    console.log("Error connecting to database");
  }
};
