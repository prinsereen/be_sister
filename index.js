import express from "express"
import db from "./config/Database.js";
//import Users from "./models/UserModel.js";
import UserRoute from "./routes/Auth.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

try {
    await db.authenticate();
    console.log("Database Connected ...")
    //await db.sync()
} catch (error) {
    console.log(error)
}

app.use(cookieParser())
app.use(express.json())
app.use(UserRoute)

app.listen(5000, ()=> console.log("server running on port 5000"))