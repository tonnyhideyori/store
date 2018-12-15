const mongoose = require("mongoose")
const Joi = require("joi")
const config = require("config")
const jwt = require("jsonwebtoken")
const sellerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    datelogin: {
        type: Date,
        default: Date.now
    },
    dateadded: {
        type: Date,
        default: Date.now
    }
})
sellerSchema.methods.generateAuthtoken=function(){
    const token = jwt.sign({
        _id: this._id
    }, config.get("jwtSellerPrivatekey"))
    return token
}
const Seller=mongoose.model("Seller",sellerSchema)
function validateSeller(seller) {
    const schema = {
        name: Joi.string()
            .min(3)
            .max(50)
            .required(),
        address:Joi.string().min(3).max(55).required(),
        password: Joi.string().min(3).max(1000).required(),
        phone: Joi.number().min(5).max(255).phone().required()
    }
    return Joi.validate(seller, schema)
}
exports.Seller=Seller
exports.validateSeller=validateSeller