const express = require("express");

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Hello,this is a auth application")
})

router.get("/register",(req,res)=>{
    res.send("Hello,this is a auth register application")
})

module.exports = router;