const express=require("express")
router=express.Router()
const Store=require("../models/store")
router.post("/api/store",async(req,res)=>{
let store= await Store.findOne({name:req.body.name})
if(store){
    res.status(400).send("shop already exists choose another name")
    return
}
store=await new Store({
    name:req.body.name
})
store.save()
res.send(store)
}
)

module.exports=router;