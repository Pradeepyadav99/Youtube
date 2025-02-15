import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()

//cors
//app.use(cors())
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

//middlewares
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))

app.use(cookieParser())

// routes import

import useRouter from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js"

// routes declaration

app.use("/api/v1/users", useRouter)
app.use("/api/v1/subscriptions", subscriptionRouter)

// http://localhost:8000/api/v1/users/register
export { app }