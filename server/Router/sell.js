const express = require('express')
const router = express.Router()
const Joi = require("joi")
const {
    Product
} = require("../models/product")

router.post("/api/sell", async (req, res) => {
    x=[]
    for (let i = 0; i < req.body.length; i++) {
        const {
            error
        } = validate(req.body[i])
        if (error) {
            res.status(404).send(error.details[0].message)
            return;
        }
        let product = await Product.findByIdAndUpdate(req.body[i].id, {
            $push: {
                timeParchased:{date:Date.now(),seller:req.body[i].idseller}
            },
            $inc: {
                quantity: -req.body[i].quantity,
                quantitySold:req.body[i].quantity
            }
        }, {
            new: true
        })
       product= await product.save()
       x.push(product)
        
    }
    res.send(x)
})

function validate(product) {
    const schema = {
        id: Joi.string().required(),
        name: Joi.string().required(),//i will remove this because we wont use this in the query
        quantity: Joi.number().required(),
        idseller:Joi.string().required()
    }
    return Joi.validate(product, schema)
}
module.exports = router