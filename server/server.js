import express from "express";
import dotenv from "dotenv";
import userRoutes from "./Routes/userRoute.js";
import connectDB from "./db/dbserver.js";

const app = express();
dotenv.config();
app.use(express.json()); //parser

//all routes in userRoutes will be prefixed with /api
app.use("/api", userRoutes);

//for non existence route
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

//connect to database
connectDB();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server started at port:${port}`);
});
