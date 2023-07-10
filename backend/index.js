const express = require("express")
const dotenv = require("dotenv").config()   //The config() method is a function provided by the dotenv module. It is invoked on the returned object from the require('dotenv') statement
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const usersRoute = require("./routes/users")
const hotelsRoute = require("./routes/hotels")
const roomsRoute = require("./routes/rooms")
const app = express();

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB")
      } catch (error) {
        throw error;
      }
}

mongoose.connection.on("disconnected",()=>{
    console.log("Mongodb disconnected!")
})

//middlewares
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);


app.listen(8800, ()=>{
    connect();
    console.log("connected to Backend")
})