import mongoose from "mongoose";

const tourSchema = new mongoose.Schema( 
  {
    title: {
      type: String,
      required: true,
      unique: true,     
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },        
    distance: {
      type: Number,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxGroupSize: {
      type: Number,
      required: true,
    },
date: {
      type: Date,
      required: true,
    },
    
    pickupOption1: {
      type: String,
      required: false,
    },
    pickupOption2: {
      type: String,
      required: false,
    },
    pickupOption3: {
      type: String,
      required: false,
    },
    pickupOption4: {
      type: String,
      required: false,
    },
    pickupOption5: {
      type: String,
      required: false,
    },
    pickupOption6: {
      type: String,
      required: false,
    },
    pickupOption7: {
      type: String,
      required: false,
    },
    pickupOption8: {
      type: String,
      required: false,
    },
    pickupOption9: {
      type: String,
      required: false,
    },
    pickupOption10: {
      type: String,
      required: false,
    },
    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Review",
      },
    ],
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Tour", tourSchema);
