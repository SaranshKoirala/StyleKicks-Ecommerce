const express = require("express");
const dotenv = require("dotenv");

const app = express();

app.use("/api/users", async (req, res) => {
  res.json("Api created of the user");
});

app.listen();
