const router = require("express").Router();
const Booking = require("../models/Booking");


router.post("/create", async (req, res) => {
    try{
        const {
            customerId,
            hostId,
            listingId,
            startDate,
            endDate,
            totalPrice
        } = req.body;

        const newBooking = new Booking({
            customerId,
            hostId,
            listingId,
            startDate,
            endDate,
            totalPrice
        });

        await newBooking.save();
        res.status(200).json(newBooking);

    } catch (err) {
        res.status(500).json({ message: "Error creating booking" });
        console.log(err);
    }
});