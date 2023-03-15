const express = require('express');
const {add} = require('../utility/Customer');
const route = express.Router();

//post coustomer details 

route.post("/Customer", async(req,res) =>{
    try{
        const crtcoustmer = await addCustomer (req.body);
      res.status(crtcoustmer?.statusCode).json(crtcoustmer)
} catch (error){
        res.status(500).json({ sucess: false, message: "internal server error", error:error.message });
    }
});
// get all customer with customer details
route.get("/", async (req, res)=> {
    try {
        const custdetails = await  getAllCustomerData();
        console.log({custdetails});
        res.status(custdetails?.statusCode).json(custdetails);
    }catch (error) {
      console.log(error);
        res.status(500).json({ sucess: false, message: "internal server error", error: error.message});
    }
  });
  
module.exports = route;