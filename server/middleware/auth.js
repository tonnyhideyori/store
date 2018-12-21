const jwt = require("jsonwebtoken")
const config = require("config")
function auth(req,res,next){
 const token=req.header("x")
 if(!token){
     res.status(401).send("Access denied. No token provided")
     return
 }
 try {
     const decodedmanager=jwt.verify(token,config.get("jwtPrivatekey"))
     /*const decodeseller=jwt.verify(token,config.get("jwtSellerPrivatekey"))*/
     req.manager=decodedmanager;
     
     //req.seller=decodeseller;
     next()
     
 } catch (error) {
     res.status(400).send("invalid token")
 }
}
module.exports=auth