const express = require("express");

const Hotel = require("../models/Hotel");
const createError = require("../utils/error");

const {
    createHotel,
    updateHotel,
    deleteHotel,
    getHotel,
    getHotels,
   } = require("../controllers/hotel");
   
const { verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

//Create
router.post("/", verifyAdmin,  createHotel)

//UPDATE
router.put("/:id", verifyAdmin,  updateHotel)


//DELETE
router.delete("/:id", verifyAdmin, deleteHotel)


//GET
router.get("/:id",getHotel)


//GET ALL
router.get("/", getHotels)


module.exports = router;