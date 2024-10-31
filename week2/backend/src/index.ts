import express from "express";
import authRoutes from "./routes/auth.route"
import messageRoutes from "./routes/message.route"

import dotenv from "dotenv"
dotenv.config();

const app = express();


app.use(express.json());

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)


app.listen(5000, () => {
    console.log("App is listening on port 5000")
})