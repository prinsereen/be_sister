import express from "express";
import db from "./config/Database.js";
import EventModel from "./models/EventModel.js";
import EventRoute from "./routes/EventRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors"; // Import cors middleware

const app = express();

try {
    await db.authenticate();
    console.log("Database Connected ...");
    await db.sync();
} catch (error) {
    console.log(error);
}

app.use(cors()); 
app.use(cookieParser());
app.use(express.json());
app.use(EventRoute);

app.listen(5000, () => console.log("Server running on port 5000"));
