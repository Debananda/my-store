import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_DB_URI!, { family: 4 });
    console.log("Connected to DB", process.env.MONGO_DB_URI);
  } catch (error) {
    console.error(error);
  }
};
