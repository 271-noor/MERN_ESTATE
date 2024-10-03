import express from "express";
import { creatListing, deleteListing, getListing, getListings, updateListing } from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post('/create', verifyToken, creatListing)
router.delete('/delete/:id', verifyToken, deleteListing)
router.post('/update/:id', verifyToken, updateListing)
router.post('/get/:id', getListing)
router.post('/get', getListings)

export default router;