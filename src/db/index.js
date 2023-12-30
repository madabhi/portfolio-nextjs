import mongoose from "mongoose";

connect().catch((err) => console.log(err));

async function connect() {
  //   await mongoose.connect("mongodb://127.0.0.1:27017/test");

  const msg = await mongoose.connect(
    "mongodb+srv://abhinavas430:Venom21@portfolio-cluster.1jxlhjm.mongodb.net/Portfolio",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  // console.log(msg);
}

export default connect;
