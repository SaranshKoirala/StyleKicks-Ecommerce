const express = require("express");
const route = express.Router();
const User = require("../model/userModel");

route.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: "success", data: users });
    if (!users) {
      res.status(404).json({ message: "No data found!" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

route.post("/", async (req, res) => {
  try {
    const { name, email, password, cpassword } = req.body;
    if (!name || !email || !password || !cpassword) {
      return res
        .status(400)
        .json({ message: "Please fill up the entier form!!" });
    }

    //password match
    if (password !== cpassword) {
      return res.status(400).json({ message: "Password do not match!" });
    }

    const user = await User.create({ name, email, password, cpassword });
    res.status(201).json({ message: "success", data: user });
  } catch (error) {
    res.status(500).json({ message: "Something went Wrong!!" });
  }
});

module.exports = route;
