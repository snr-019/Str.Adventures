import express from "express"
import dotenv from "dotenv"
import connectMongoDB from "./database/connectMongoDB.js"
import authRoute from "./routes/auth.js"
import cors from "cors"

const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())
app.use("/api/", authRoute) 

const startServer = async () => {
  try {
    // databse connection
    await connectMongoDB(process.env.DB_CONNECT_STR) 
    console.log(" Yes Database connected!")
    // server connection
    const PORT = process.env.PORT
    app.listen(PORT, () => {
      console.log(` Yes Server started at: ${PORT}`)
      console.log(`http://localhost:${PORT}/`)
    })
  } catch (error) {
    console.log("Error in starting server:", error)
  }
}

startServer()
