import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String
    },
    userEmail: {
      type: String,
    },
    fullName: {
      type: String,
      required: true,
    },
    guestSize: {
      type: Number,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
  
    tourName: {  // Add the tourName field here
      type: String,  // Modify the type according to your data structure
      required: true,  // Adjust the required flag as needed
    },
    pickup: {  // Add the tourName field here
      type: String,  // Modify the type according to your data structure
      required: true,  // Adjust the required flag as needed
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
