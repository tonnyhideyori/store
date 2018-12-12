const mongoose = require("mongoose")
const Joi = require("joi")
const products = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: String,
    quantity: Number,
    price: Number,
    dateAdded: {
        type: Date,
        default: Date.now
    },
    dateUpdated: {
        type: Date,
        default: Date.now
    },
    timeParchased: [{
        date: Date,
        seller: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "seller"
        }
    }],
    quantitySold: {
        type: Number,
        default: 0
    }
})
const Product = mongoose.model("product", products)
//validating user input
function validate(product) {
    const schema = {
        name: Joi.string()
            .min(3)
            .required(),
        quantity: Joi.number().required(),
        category: Joi.string(),
        price: Joi.number().required()
    }
    return Joi.validate(product, schema)
}
exports.Product = Product;
exports.validate = validate