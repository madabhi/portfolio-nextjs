import mongoose, { Schema } from "mongoose";
const Project = new Schema({
  title: { type: String, required: true },
  description: String,
  category: { type: String, default: null },
  gitHubLink: { type: String, default: null },
  projectId: { type: String, required: true },
  projectImage: {
    type: String,
    required: true,
  },
  imageRef: {
    type: String,
    required: true,
  },
  isFeatured: { type: Boolean, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
});
export default mongoose.models.Project || mongoose.model("Project", Project);
