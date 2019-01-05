const mongoose=require("mongoose")

const Store=mongoose.model("stores",new mongoose.Schema({
    name:String,
    dateCreated:{type:Date,default:Date.now}
}))
module.exports=Store