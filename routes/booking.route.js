import express, { Router } from "express";
import {
  bookPackage,
  cancelBooking,
  deleteBookingHistory,
  getAllBookings,
  getAllUserBookings,
  getCurrentBookings,
  getUserCurrentBookings,
  describeDestination,
  showTourController,
} from "../controllers/booking.controller.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import Tour from "../models/tour.model.js";

const router = express.Router();

//select destination
router.post('/destination', requireSignIn, describeDestination);

router.get('/tourview', requireSignIn, showTourController);

// book package
router.post("/book-package", requireSignIn, bookPackage);

//get all current bookings admin
router.get("/get-currentBookings", requireSignIn, isAdmin, getCurrentBookings);

//get all bookings admin
router.get("/get-allBookings", requireSignIn, isAdmin, getAllBookings);

//get all current bookings by user id
router.get(
  "/get-UserCurrentBookings/:id",
  requireSignIn,
  getUserCurrentBookings
);

//get all bookings by user id
router.get("/get-allUserBookings/:id", requireSignIn, getAllUserBookings);

//delete history of booking
router.delete(
  "/delete-booking-history/:id/:userId",
  requireSignIn,
  deleteBookingHistory
);

//cancle booking by id
router.post("/cancel-booking/:id/:userId", requireSignIn, cancelBooking);

export default router;
