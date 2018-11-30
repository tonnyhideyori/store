const mongoose = require("mongoose")

mongoose.model("Product", new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: String,
    quantity: Number,
    price: Number
}))