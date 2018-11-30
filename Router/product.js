//this is for router configuration
const express = require("express")
const Joi = require("joi")
const mongoose = require("mongoose")

const Product = mongoose.model("Product")
//mongoose initiation

//configuring router
module.exports = app => {
    app.get("/api/product", async(req, res) => {
        const products=await Product.find().sort("name")
        res.send(products)
    })
    app.get("/", (req, res) => {
        res.send("this is home") //i will use res.redirect("/")- for front end-react
    })
    app.post("/api/product", async (req, res) => {
        const {
            error
        } = validate(req.body)
        if (error) {
            //400 bad request
            res.status(400).send(error.details[0].message)
            return
        }
        let product = new Product({
            name: req.body.name,
            category: req.body.category,
            quantity: req.body.quantity,
            price: req.body.price
        })
        product = await product.save()
        res.send(product)

    })
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
}