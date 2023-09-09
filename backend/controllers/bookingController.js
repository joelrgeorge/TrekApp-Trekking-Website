import Booking from '../models/Booking.js'



export const createBooking = async (req, res) => {
  try {
    const { tourId, tourName, ...bookingData } = req.body; // Include tourName in the request body

    // Create a new booking with the tourId and tourName
    const newBooking = new Booking({
      ...bookingData,
      tourId,
      tourName, // Include the tourName in the booking
    });

    const savedBooking = await newBooking.save();

    res.status(200).json({
      success: true,
      message: "Your tour is booked",
      data: savedBooking,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};




export const getBooking = async (req, res) => {
  const id = req.params.id;

  try {
    const book = await Booking.findById(id).populate('tourId'); // Populate the 'tourId' field to get tour details
    res.status(200).json({
      success: true,
      message: "successful",
      data: book,
    });
  } catch (err) {
    res.status(404).json({ success: true, message: " not found " });
  }
};

export const deleteBooking = async (req, res) => {
    const id = req.params.id;
  
    try {
      const book = await Booking.findByIdAndDelete(id);
  
      if (!book) {
        return res.status(404).json({
          success: false,
          message: "Booking not found",
        });
      }
  
      res.status(200).json({
        success: true,
        message: "Booking deleted successfully",
        data: book,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  };
  
export const getAllBooking = async(req,res) => {

    try {
        const books = await Booking.find({})
        res
        .status(200)
        .json({
            success:true, 
            message:"successful",
            count: books.length,
            data: books,
         });
    } catch (err) {
        res.status(500).json({success:true, message:" internal server error "})
        
    }
} ;

 // get user count
 export const getBookingCount = async(req,res)=> {
  try{
      const BookingCount = await Booking.estimatedDocumentCount();

      res.status(200).json({success:true, data:BookingCount});
  } catch(req){
      res.status(500).json({ success:false, message: "failed to fetch"})

  }
}

