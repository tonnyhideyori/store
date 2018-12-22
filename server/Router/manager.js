const bcrypt = require("bcrypt");
const express = require("express")
const router = express.Router()
const _ = require("lodash")
const {
    Manager,
    validateManager
} = require("../models/manager")
const {
    Seller,
    validateSeller
} = require("../models/seller")
const auth=require("../middleware/auth")
router.post("/api/manager/registration", async (req, res) => {
    const {
        error
    } = validateManager(req.body)
    if (error) {
        res.status(400).send(error.details[0].message)
        return
    }
    let manager = await Manager.findOne({
        phone: req.body.phone
    })
    if (manager) {
        res.status(404).send("Manager already registered")
        return
    }
    manager = new Manager(_.pick(req.body, ["name", "phone", "password"]))
    const salt = await bcrypt.genSalt(10)
    manager.password = await bcrypt.hash(manager.password, salt)
    await manager.save()
    const token = manager.generateAuthtoken()
    res.header("x-auth-token", token).send({token:token,user:_.pick(manager, ["_id", "name"])})
})
router.post("/api/manager/addseller",auth, async (req, res) => {
    const { error } = validateSeller(req.body)
    if (error) {
        res.status(404).send(error.details[0].message)
        return
    }
    let seller = await Seller.findOne({phone: req.body.phone})
    if (seller) {
        res.status(400).send("Seller already registered")
        return
    }
    seller = new Seller(_.pick(req.body, ["name", "phone", "address", "password"]))
    const salt = await bcrypt.genSalt(10)
    seller.password = await bcrypt.hash(seller.password, salt)
    await seller.save()
    res.send(_.pick(seller, ["_id", "name", "phone"]))
})

module.exports = router