const express = require('express');
const db = require('../model/db');
const {addtransaction} = require('../utility/transaction');
const route = express.Router();
const { Op } = require("sequelize");

//post api for record transaction 

route.post("/addtransaction", async(req,res) =>{
    try{
        const crttrans = await addtransaction (req.body);
      res.status(crtUser?.statusCode).json(crttrans)
} catch (error){
        res.status(500).json({ sucess: false, message: "internal server error", error:error.message });
    }
});

// get api calculate with average with year and month

route.get('/average', async (req, res) => {
    try {
      const { year, month } = req.query;
      const currentDate = new Date();
  
      let startDate, endDate;
      if (year == currentDate.getFullYear() && month == currentDate.getMonth() + 1) {
        // If current month, exclude today's date from calculation
        startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 1);
      } else {
        startDate = new Date(year, month - 1, 1);
        endDate = new Date(year, month, 0);
      }
    // search by date range (between to dates)
    const result = await db.transaction.findOne({
        where: { date: {[Op.between]: [startDate, endDate], },
        },
      });
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

module.exports = route;