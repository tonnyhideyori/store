const auth = require("./Router/auth")
const mongoose = require("mongoose")
const express = require("express")
require("./models/product")
const product = require("./Router/product")
const manager=require("./Router/manager")
const sell=require("./Router/sell")



//connect to mongo-database
mongoose.connect("mongodb://localhost/Store",{userNewUrlParser:true})
    .then(console.log("connected to mongoDB..."))
    .catch(err => console.error(`Couldn't connect to MongoDB...${err}`))
const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use("/",product)
app.use("/", manager)
app.use("/",auth)
app.use("/",sell)

if(process.env.NODE_ENV==="production"){
    //express will serve up production assets like our main.js files
    app.use(express.static('client/build'))

    //express will serve up our index.html,if it doesnt recognize the route
    const path=require('path')
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,"client",'build','index.html'))
    })
}
const port = 4500 || process.env.PORT
app.listen(port)