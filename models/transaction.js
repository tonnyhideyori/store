const mongoose = require("mongoose")
const {
    seller
} = require("./seller")
const {Product}=require('./product')
transactions = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    article:Product,
    seller:seller
})
const Transactions=mongoose.model("transactions",transacions)
exports.Transactions=Transactions;