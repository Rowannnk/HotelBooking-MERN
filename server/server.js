//first npm init -y
//npm install express dotenv cors mongoose cloudinary multer svix
// "type":"module", /* Add this  */

//npm install --save-dev nodemon

//npm install @clerk/express

//after depolying in vercel you have to change in clerk website domain hotel-booking-mern-backend-rouge.vercel.app/api/clerk

import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/clerkWebhooks.js";

connectDB();

const app = express();
app.use(cors()); //Enable cross-origin resource sharing

//Middleware
app.use(express.json());
app.use(clerkMiddleware());

//Api to listen clerk webhooks
app.use("/api/clerk", clerkWebhooks);

app.get("/", (req, res) => res.send("API is working "));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
