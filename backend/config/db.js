import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
    });
    console.log(`Mongodb connected: ${conn.connection.host}`.cyan.underline);
  } catch (e) {
    console.error(`Error: ${error}`.red.underline.bold);
    process.exit(1);
  }
};
export default connectDB;
