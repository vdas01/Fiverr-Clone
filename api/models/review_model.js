import mongoose from "mongoose";
const { Schema } = mongoose;

const ReviewSchema = new Schema(
  {
    gigId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    star: {
      type: Number,
      required: true,
      //options so that user cannot choose anything else than 1,2,3,4,5
      enum:[1,2,3,4,5]
    },
    desc: {
      type: String,
      required: true,
    },
  }, {timestamps: true,});

export default mongoose.model("Review", ReviewSchema);