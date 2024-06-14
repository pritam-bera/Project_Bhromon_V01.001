import mongoose from "mongoose";

const packageSchema = new mongoose.Schema(
  {
    packageName: {
      type: String,
      required: true,
    },
    packageDescription: {
      type: String,
      required: true,
    },
    packageDestination: {
      type: String,
      required: true,
    },
    packageDays: {
      type: Number,
      required: true,
    },
    packageNights: {
      type: Number,
      required: true,
    },
    packagePrice: {
      type: Number,
      required: true,
    },
    packageDiscountPrice: {
      type: Number,
      required: true,
    },
    packageRating: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Package = mongoose.model("Package", packageSchema);

export default Package;
