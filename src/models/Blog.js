import mongoose, { Schema } from "mongoose";
const Blog = new Schema({
  title: String,
  blogId: String,
  tag: String,
  content: String,
  Date: String,
});

export default mongoose.models.Blog || mongoose.model("Blog", Blog);
