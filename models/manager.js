const mongoose = require("mongoose")

mongoose.model("Manager", new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    emaiil: String,
    password: String,
    loginDate: {
        type: Date,
        default: Date.now
    }
}))