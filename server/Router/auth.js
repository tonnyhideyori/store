const _ = require("lodash")
const Joi = require("joi")
const express = require("express")
const bcrypt = require("bcrypt")
const {Manager}=require("../models/manager")
const {Seller}=require("../models/seller")

const router = express.Router()
//auth for manager
router.post("/api/auth/manager",async(req,res)=>{
    const {error}=validate(req.body)
    if(error){
        res.status(404).send(error.deatils[0].message)
        return
    }
    let manager = await Manager.findOne({
        email: req.body.email
    })
    if(!manager){
        res.status(400).send("invalid email")
        return
    }
    const validPassword= await bcrypt.compare(req.body.password,manager.password)
    if(!validPassword){
        res.status(400).send("invalid password")
    }
     const token = manager.generateAuthtoken()
     res.header("x-auth-token", token).send(token)
})
//authentification of seller
router.post("/api/auth/seller", async (req, res) => {
    const {
        error
    } = validate(req.body)
    if (error) {
        res.status(404).send(error.deatils[0].message)
        return
    }
    let seller = await Seller.findOne({
        email: req.body.email
    })
    if (!seller) {
        res.status(400).send("invalid email or password")
        return
    }
    const validPassword = await bcrypt.compare(req.body.password, seller.password)
    if (!validPassword) {
        res.status(400).send("invalid email or password")
    }
    const token = seller.generateAuthtoken()
    res.header("x-auth-token",token).send(token)
})
function validate(req) {
    const schema = {
        password: Joi.string().required(),
        email: Joi.string().min(5).max(255).email().required()
    }
    return Joi.validate(req, schema)
}
module.exports=router