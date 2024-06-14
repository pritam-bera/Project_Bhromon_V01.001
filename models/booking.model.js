import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    Destination: {
      type: String,
      required: true,
    },
    Buyer: {
      type: String,
      ref: "User",
      required: true,
    },
    Days: {
      type: Number,
      required: true,
    },
    Nights: {
      type: Number,
      required: true,
    },
    Price: {
      type: Number,
      required: true,
    },
    TotalPrice: {
      type: Number,
      required: true,
    },
    Persons: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Booked",
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
