const express = require('express');
const {addtransaction} = require('../utility/transaction');
const route = express.Router();

//post api for record transaction 

route.post("/addtransaction", async(req,res) =>{
    try{
        const crttrans = await addtransaction (req.body);
      res.status(crtUser?.statusCode).json(crttrans)
} catch (error){
        res.status(500).json({ sucess: false, message: "internal server error", error:error.message });
    }
});
module.exports = route;