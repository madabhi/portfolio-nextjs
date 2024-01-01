import mongoose, { Schema } from "mongoose";
const Blog = new Schema({
  title: { type: String, required: true },
  blogId: { type: String, required: true },
  tag: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, required: true },
});

export default mongoose.models.Blog || mongoose.model("Blog", Blog);
