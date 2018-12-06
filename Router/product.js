//this is for router configuration
const Joi = require("joi")
const mongoose = require("mongoose")

const Product = mongoose.model("Product")
//mongoose initiation

//configuring router
module.exports = app => {
    app.get("/api/product", async (req, res) => {
        const products = await Product.find().sort("name")
        res.send(products)
    })
    app.get("/", (req, res) => {
        res.send("this is home") //i will use res.redirect("/")- for front end-react
    })
    app.get("/api/product/:id",async(req,res)=>{
        try{
        const product=await Product.findById(req.params.id)
        res.send(product)
        }
        catch (err) {
            res.status(404).send("the given item isn't found")
        }
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
    app.put("/api/product/:id", async (req, res) => {
        const {
            error
        } = validate(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        try{
        const product = await Product.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            category: req.body.category,
            quantity: req.body.quantity,
            price: req.body.price
        }, {
            new: true
        })
        res.send(product)
        }
        catch (err) {
             res.status(404).send("the given item isn't found")
        }
    })
    app.delete("/api/product/:id",async(req,res)=>{
        const product=await Product.findByIdAndRemove(req.params.id)
        if (!product) return res.status(404).send("the given item isn't found")
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