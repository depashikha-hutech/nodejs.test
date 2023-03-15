const db = require("../model/db");
require("dotenv").config();
const env = process?.env

async function addtransaction(users) {
    try{
        const usersInfo = await db.transaction.create(users)
      return({ sucess:true, statusCode: 200, message:"user created sucessfully", user:{usersInfo}});
    } catch (error){
        console.log(error);
          return({ sucess:false, statusCode: 500, message:"internal server error", error:error.message});
    }   
}
module.exports = {addtransaction };
