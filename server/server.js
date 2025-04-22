import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/dbserver.js";
import cors from "cors";
import userRoute from "./Routes/userRoute.js";
import productRoute from "./Routes/productRoute.js";
import chatRoute from "./Routes/chatRoute.js";

const app = express();

app.use(cors());

dotenv.config();
app.use(express.json()); //parser

//all routes in userRoutes will be prefixed with /api
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/huggingface", chatRoute);

//for non existence route
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

//connect to database
connectDB();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started at port:${port}`);
});
