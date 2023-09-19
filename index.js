import express from "express"
import db from "./config/Database.js";
//import Users from "./models/UserModel.js";
import UserRoute from "./routes/UserRoute.js"

const app = express();

try {
    await db.authenticate();
    console.log("Database Connected ...")
    //await db.sync()
} catch (error) {
    console.log(error)
}

app.use(express.json())
app.use(UserRoute)

app.listen(5000, ()=> console.log("server running on port 5000"))