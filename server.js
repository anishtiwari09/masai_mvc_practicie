const express=require('express')
const connect=require('./config/db')
const cors=require('cors')
const app=express()
const ejs=require('ejs')
const PORT=5000
const User=require('./models/users.model')
const userRouter=require('./route')
//cors
console.log(__dirname)
app.set('view engine',"ejs")
app.use(express.static('public'));
app.get('/',(req,res,next)=>{
   res.render("index",{title:"World"})
})
app.use(cors())

app.use(express.json())
app.use("/users",userRouter)
const start=async()=>{
    await connect()
    app.listen(PORT,(req,res)=>{
        console.log('app is working on '+PORT)
    })
}

module.exports=start