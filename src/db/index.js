import mongoose from "mongoose";
import dotenv from "dotenv";
connect().catch((err) => console.log(err));

async function connect() {
  //   await mongoose.connect("mongodb://127.0.0.1:27017/test");

  const msg = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  // console.log(msg);
}

export default connect;
