import mongoose, { Schema } from "mongoose";
const Achievement = new Schema({
  title: { type: String, required: true },
  achievement_id: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  date: { type: Date, required: true },
  imageRef: { type: String, required: true },
});

export default mongoose.models.Achievement ||
  mongoose.model("Achievement", Achievement);
