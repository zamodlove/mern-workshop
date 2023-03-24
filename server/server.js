const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
require ('dotenv').config()

const blogRoute = require('./routes/blog')

 
//Connect Cloud Database
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:false
})
.then(()=>console.log("เชื่อมต่อข้อมูลเรียบร้อย"))
.catch((err)=>console.log(err))

 
  
const app = express() 
//middleware
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))


//route 
app.use('/api',blogRoute)

// app.get("*",(req,res)=>{
//     res.json({
//         data:"message from server"
//     })
// })

const port = process.env.PORT || 8080
app.listen(port,()=>console.log(`start server in port${port}`))