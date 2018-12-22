const _ = require("lodash")
const Joi = require("joi")
const express = require("express")
const bcrypt = require("bcrypt")
const {Manager}=require("../models/manager")
const {Seller}=require("../models/seller")
const auth =require("../middleware/auth")
const authSeller=require("../middleware/authseller")

const router = express.Router()
//auth for manager
router.post("/api/auth/manager",async(req,res)=>{
    const {error}=validate(req.body)
    if(error){
        res.status(404).send(error.details[0].message)
        return
    }
    let manager = await Manager.findOne({
        phone: req.body.phone
    })
    if(!manager){
        res.status(400).send("invalid phone or password")
        return
    }
    const validPassword= await bcrypt.compare(req.body.password,manager.password)
    if(!validPassword){
        res.status(400).send("invalid phone or password")
    }
     const token = manager.generateAuthtoken()
     res.header("x", token).send({token:token,user:{name:manager.name,id:manager._id}})
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
        phone: req.body.phone
    })
    if (!seller) {
        res.status(400).send("invalid phone or password")
        return
    }
    const validPassword = await bcrypt.compare(req.body.password, seller.password)
    if (!validPassword) {
        res.status(400).send("invalid phone or password")
    }
    const token = seller.generateAuthtoken()
    res.header("x",token).send(seller.name)
})
 router.get("/api/me_manager",auth,async(req,res)=>{
    const manager= await Manager.findById(req.manager._id).select ("-password")  
    res.send(manager) 
 })
 router.get("/api/me_seller",authSeller,async(req,res)=>{
     const seller=await Seller.findById(req.seller._id).select("-password")
     res.send(seller)
     
 })
 router.get("/api/logout",(req,res)=>{
     req.logout()
     res.redirect("http:localhost:3000")
 })
function validate(req) {
    const schema = {
        name:Joi.string(),
        password: Joi.string().required(),
        phone: Joi.number().min(5).max(1000000000).required()
    }
    return Joi.validate(req, schema)
}
module.exports=router