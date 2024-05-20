const router = require("express").Router();
const multer = require("multer");
const Listing = require("../models/Listing");
const User = require("../models/User");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads/");
    }, filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });


router.post("/create", upload.array("listingPhotos"), async (req, res) => {
    try{

        const {
            creator,
            category,
            type,
            streetAddress,
            aptSuite,
            city,
            province,
            country,
            guestCount,
            bedroomCount,
            bedCount,
            bathroomCount,
            amenities,
            title,
            description,
            highlight,
            highlightDesc,
            price 
        } = req.body;

        const listingPhotos = req.files

        if(!listingPhotos) {
            return res.status(400).send("Please add a listing photo");
        }

        const listingPhotoPaths = listingPhotos.map((file) => file.path)

        const newListing = new Listing({
            creator,
            category,
            type,
            streetAddress,
            aptSuite,
            city,
            province,
            country,
            guestCount,
            bedroomCount,
            bedCount,
            bathroomCount,
            amenities,
            listingPhotoPaths,
            title,
            description,
            highlight,
            highlightDesc,
            price,
        });

        await newListing.save();
        res.status(200).json(newListing);

    } catch(err) {
        res.status(500).json({ message: "Error uploading photos" });
        console.log(err);
    }
})

router.get("/", async (req, res) => {
    const qCategory = req.query.category;
    try {
        let listings;
        if (qCategory) {
            listings = await Listing.find({ category: qCategory }).populate("creator");
        } else {
            listings = await Listing.find().populate("creator");
        }
        res.status(200).json(listings);
        
    } catch (err) {
        res.status(500).json({ message: "Error retrieving listings" });
        console.log(err);
    }
})

router.get("/:listingId", async (req, res) => {
    
    try {
        const { listingId } = req.params;
        const listing = await Listing.findById(listingId).populate("creator");
        res.status(200).json(listing);
        
    } catch (err) {
        res.status(500).json({ message: "Error retrieving listing" });
        console.log(err);
    }
})  


module.exports = router;