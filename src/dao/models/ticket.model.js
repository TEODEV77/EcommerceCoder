import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    code: { type: String, unique: true, required: true },
    amount: { type: Number, required: true },
    purchaser: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("tickets", ticketSchema);
