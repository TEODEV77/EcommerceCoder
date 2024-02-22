import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    role: {
      type: String,
      enum: ["admin", 'premium',"user"],
      default: "user",
    },
    email: { type: String, required: true, unique: true },
    username: { type: String, default: "No username" },
    provider: { type: String, default: "No provider" },
    password: { type: String, default: ""},
    age: { type: Number, required: true },
    cart: { type: String, default: "" },
  },
  { timeseries: true }
);

export default mongoose.model('users', userSchema);