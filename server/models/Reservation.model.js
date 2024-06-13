import mongoose from "mongoose";
const ReservationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  numberOfGuests: {
    type: Number,
    required: true,
  },
  specialRequests: {
    type: String,
  },
  duration: {
    type: Number,
  },
  status: {
    type: String,
    enum: ["confirmed", "pending", "canceled", "completed"],
    default: "confirmed",
  },
  assignedTable: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Table",
  },
  assigner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  assignedAt: {
    type: Date,
  },
});
export default mongoose.model("Reservation",  ReservationSchema);