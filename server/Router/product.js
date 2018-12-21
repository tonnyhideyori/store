//this is for router configuration

const express = require("express")
const {
    Product,
    validate
} = require("../models/product")
const authManager = require("../middleware/auth")
const router = express.Router()

router.get("/api/product", async (req, res) => {
    let products = await Product.find().sort("name")
    res.send(products)
})
/*router.get("/", async (req, res) => {
    res.send("this is home") //i will use res.redirect("/")- for front end-react
})*/
router.get("/api/product/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.send(product)
    } catch (err) {
        res.status(404).send("the given item isn't found")
    }
})
router.post("/api/product", authManager, async (req, res) => {
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
    await product.save()
    product = await Product.find().sort("name")
    res.send(product)

})
router.put("/api/product/:id", authManager, async (req, res) => {
    const {
        error
    } = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, {$set:{
            name: req.body.name,
            category: req.body.category,
            quantity: req.body.quantity,
            price: req.body.price
        }}, {
            new: true
        })
        res.send(product)
    } catch (err) {
        res.status(404).send("the given item isn't found")
    }
})
router.delete("/api/product/:id", authManager, async (req, res) => {
    const product = await Product.findByIdAndRemove(req.params.id)
    if (!product) return res.status(404).send("the given item isn't found")
    res.send(product)
})

module.exports = router