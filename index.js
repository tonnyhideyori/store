const mongoose = require("mongoose")
const express = require("express")
require("./models/product")
const router = require("./Router/product")


//connect to mongo-database
mongoose.connect("mongodb://localhost/Store")
    .then(console.log("connected to mongoDB..."))
    .catch(err => console.error(`Couldn't connect to MongoDB...${err}`))
const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
//app.use("/",router)
require("./Router/product")(app)
const port = 4500 || process.env.PORT
app.listen(port, () => {
    console.log("listening in port 4500")
})