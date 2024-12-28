const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.use("/api/users", async (req, res) => {
  res.json("Api created of the user");
});

app.use("/*", (req, res) => {
  console.error("No routes found");
  res.status(404).send("Routes not found!!");
});

const port = process.env.PORT || 9000;

app.listen(port, (req, res) => {
  console.log(`Server started in the port: ${port}`);
});
