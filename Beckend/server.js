const express = require("express")
const app = express()
const user = require("./connection")
app.use(express.json())

app.post("/",async(req,res)=>{
    try {
        const senddata = user(req.body)
        const savedata = await senddata.save()
        res.send(savedata)
    } catch (error) {
        res.status(404).send(error)
    }
})

app.delete("/delete/:id",async(req,res)=>{
    try {  
        const id = req.params.id
        const deletedata = await user.findByIdAndDelete({_id:id})
        res.send(deletedata)
    } catch (error) {
        res.status(404).send(error)
    }
})

app.listen(3000,()=>{
     console.log("server running on port 3000");
})