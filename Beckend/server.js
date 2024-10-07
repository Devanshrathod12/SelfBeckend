import express from "express"
import UserRoutes from './routes/route.js'
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("api WORKING")
})

//end point
app.use("/api/user",UserRoutes)


app.listen(3000,()=>{
     console.log("server running on port 3000");
})