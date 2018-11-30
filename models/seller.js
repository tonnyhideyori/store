const mongoose = require("mongoose")
mongoose.model("Seller", new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    datelogin: {
        type: Date,
        default: Date.now
    }
}))