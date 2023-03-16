const { Transaction } = require("sequelize");
const db = require("../model/db");
require("dotenv").config();
const env = process?.env
async function addCustomer(users) {
    try{
        const customerInfo = await db.Customer.create(users)
      return({ sucess:true, statusCode: 200, message:"user created sucessfully", user:{customerInfo}});
    } catch (error){
        console.log(error);
          return({ sucess:false, statusCode: 500, message:"internal server error", error:error.message});
    }   
}

async function getAllCustomerData() {
    try {
      const getCustomerDetails = await db.Customer.findAll({
      include:[{model:Transaction}] })
        return {
           sucess: true,
           statusCode: 200,
           message: "organisation details",
           user: getCustomerDetails?.Count
        }
    
    } catch (error) {
       console.log(error);
          return({ sucess:false, statusCode: 500, message:"organisation not found", error: error.message });
    }
}   

module.exports = {addCustomer,getAllCustomerData };
