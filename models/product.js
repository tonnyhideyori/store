const mongoose = require("mongoose")

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
    }
})
const Product = mongoose.model("Product", products)
//validating user input
function validate(product) {
    const schema = {
        name: Joi.string()
            .min(3)
            .required(),
        quantity: Joi.number(),
        category: Joi.string(),
        price: Joi.number()
    }
    return Joi.validate(product, schema)
}
exports.Product = Product;
exports.validate = validate