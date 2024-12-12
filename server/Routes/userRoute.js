import express from "express";
import {
  getUsers,
  getUser,
  createUser,
  deleteUser,
} from "../Controller/userController.js";

const router = express.Router();

router.get("/users", getUsers); //to get all users
router.get("/users/:id", getUser); //to get a user
router.post("/users", createUser); //to create a user
router.delete("/users/:id", deleteUser); //to delete a user

export default router;
