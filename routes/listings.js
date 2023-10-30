const express=require("express");
const router=express.Router();
const Listing=require("../models/listing");
const wrapAsync=require("../utils/wrapAsync");
const{isLoggedIn,isOwner,validateListing}=require("../middleware");
const listingController=require("../controllers/listings");
const multer  = require('multer')
const {storage}=require("../cloudConfig");
const upload = multer({ storage });


router
.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn,upload.single('listing[image]'),validateListing,wrapAsync(listingController.createListing));
 //new route===>
 
 router.get("/new",isLoggedIn,listingController.renderNewForm);

router
.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn,isOwner,upload.single('listing[image]'),validateListing,wrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));



 
//edit route===>
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.editListings));


module.exports=router;
