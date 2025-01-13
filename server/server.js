<<<<<<< HEAD
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/dbserver.js";
import cors from "cors";
import userRoute from "./Routes/userRoute.js";
import productRoute from "./Routes/productRoute.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://example.com"], // Allow multiple origins
    methods: "GET,POST,PUT,DELETE", // Allow specific HTTP methods
    credentials: true, // Allow cookies and credentials
  })
);

dotenv.config();
app.use(express.json()); //parser

//all routes in userRoutes will be prefixed with /api
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

//for non existence route
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

//connect to database
connectDB();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started at port:${port}`);
=======
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const userRoute = require("./routes/userRoute.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
dotenv.config();

//parsing the JSON requests
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api/users", userRoute);

//for invalid route
app.use("/*", (req, res) => {
  console.error("No routes found");
  res.status(404).send("Routes not found!!");
});

//connect to the database
connectDB();

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server started in the port: ${port}`);
>>>>>>> e6d4ee861b6e3d686dc981686bebe6268a63ef48
});
