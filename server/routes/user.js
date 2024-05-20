const router = require("express").Router();
const Booking = require("../models/Booking");
const User = require("../models/User");
const Listing = require("../models/Listing");

router.get("/:userId/trips" , async (req, res) => {
    try {
        const { userId } = req.params;
        const trips = await Booking.find({ customerId: userId }).populate("listingId hostId listingId"); 
        res.status(200).json(trips);
        
    } catch (err) {
        res.status(500).json({ message: "Error retrieving trips" });
        console.log(err);
    }
})

router.patch("/:userId/:listingId", async (req, res) => {
    try{

        const { userId, listingId } = req.params;
        const user = await User.findById(userId);
        const listing = await Listing.findById(listingId);

        const favoriteListing = user.wishList.find((item) => item._id.toString() === listingId);

        if(favoriteListing){
            user.wishList = user.wishList.filter((item) => item._id.toString() !== listingId);
            await user.save();
            res.status(200).json({ message: "Listing removed from wishlist" , wishList: user.wishList});
        } else{
            user.wishList.push(listing);
            await user.save();
            res.status(200).json({ message: "Listing added to wishlist" , wishList: user.wishList});
        }

    } catch (err) {
        res.status(500).json({ message: "Error retrieving trips" });
        console.log(err);
    }
})




module.exports = router;