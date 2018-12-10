const mongoose=require('mongoose')
const {Product}=require("./product")
const cart=new mongoose.Schema({
    products:[Product],
    total:Number
})
const Cart=mongoose.model("basket",cart)
exports.Cart=Cart