import express from "express";
import dotenv from "dotenv";
import userRoutes from "./Routes/userRoute.js";
import connectDB from "./db/dbserver.js";
import cors from "cors";

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
app.use("/api", userRoutes);

//for non existence route
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

//connect to database
connectDB();

const port = 5000 || process.env.PORT;

app.listen(port, () => {
  console.log(`Server started at port:${port}`);
});
