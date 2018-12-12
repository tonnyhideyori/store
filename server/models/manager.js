const mongoose = require("mongoose")
const Joi = require("joi")
const config = require("config")
const jwt = require("jsonwebtoken")
const managerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: String,
    password: String,
    loginDate: {
        type: Date,
        default: Date.now
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
        name: Joi.string()
            .min(3)
            .required(),

        password: Joi.string()
            .min(5)
            .max(1000)
            .required(),
        email: Joi.string()
            .min(5)
            .max(255)
            .email()
            .required()
    }
    return Joi.validate(manager, schema)
}
exports.Manager = Manager
exports.validateManager = validateManager