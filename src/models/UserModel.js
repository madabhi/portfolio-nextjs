// User Model
import mongoose from "mongoose";

// Check if the model is already defined
const User =
  mongoose.models.User ||
  mongoose.model("User", {
    email: String,
    password: String,
  });

export default User;
