import express from "express";
import {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  loginUser,
} from "../Controller/userController.js";

const router = express.Router();

router.get("/", getUsers); //to get all users
router.get("/:id", getUser); //to get a user
router.post("/", createUser); //to create a user
router.delete("/:id", deleteUser); //to delete a user
router.post("/login", loginUser);

export default router;
