const mongoose = require("mongoose")
const Joi = require("joi")
const config = require("config")
const jwt = require("jsonwebtoken")

const managerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: Number,
    password: String,
    loginDate: {
        type: Date,
        default: Date.now
    },
    store: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "stores"
    }

})
managerSchema.methods.generateAuthtoken = function () {
    const token = jwt.sign({
        _id: this._id
    }, config.get("jwtPrivatekey"))
    return token
}
const Manager = mongoose.model("Manager", managerSchema)
//validating user input
function validateManager(manager) {
    const schema = {
        id:Joi.string().required(),
        name: Joi.string()
            .min(3)
            .required(),

        password: Joi.string()
            .min(5)
            .max(1000)
            .required(),
        phone: Joi.number()
            .min(5)
            .max(10000000000)
            .required()
    }
    return Joi.validate(manager, schema)
}
exports.Manager = Manager
exports.validateManager = validateManager