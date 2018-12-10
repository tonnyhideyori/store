const auth = require("./Router/auth")
const mongoose = require("mongoose")
const express = require("express")
require("./models/product")
const product = require("./Router/product")
const manager=require("./Router/manager")



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
//require("./Router/product")(app)
const port = 4500 || process.env.PORT
app.listen(port, () => {
    console.log("listening in port 4500")
})