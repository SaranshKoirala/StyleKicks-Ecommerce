const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");

const app = express();
dotenv.config();

app.use("/api/users", (req, res) => {
  res.json("Api created of the user");
});

app.use("/*", (req, res) => {
  console.error("No routes found");
  res.status(404).send("Routes not found!!");
});

//connect to the database
connectDB();

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server started in the port: ${port}`);
});
