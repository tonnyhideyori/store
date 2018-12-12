const jwt = require("jsonwebtoken")
const config = require("config")
function authSeller(req,res,next){
 const token=req.header("x-auth-token")
 if(!token){
     res.status(401).send("Access denied. No token provided")
     return
 }
 try {
     
     const decodeseller=jwt.verify(token,config.get("jwtSellerPrivatekey"))
     req.seller=decodeseller;
     next()
     
 } catch (error) {
     res.status(400).send("invalid token")
 }
}
module.exports=authSeller