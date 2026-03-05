import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import addressRoutes from "./routes/addressRoutes.js";


const app = express();

app.use(cors());
app.use(express.json());


// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/userdb")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


// Routes
app.use("/api", userRoutes);
app.use("/api", addressRoutes);


app.listen(5000, () => {
  console.log("Server running on port 5000");
});