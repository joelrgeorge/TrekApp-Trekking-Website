
import express from 'express'
import { createBooking } from "../controllers/bookingController.js";
import { getBooking,getAllBooking ,deleteBooking, getBookingCount} from "../controllers/bookingController.js";
import { verifyAdmin } from "../utils/verifyToken.js";



const router = express.Router()

router.post("/", createBooking)
router.get("/:id", getBooking)
router.get("/" , getAllBooking)
router.delete("/:id", deleteBooking);
router.get("/search/getBookingCount", getBookingCount);

export default router;









