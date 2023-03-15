const express = require('express');
const app = express();
const port = process?.env?.port || 8003;
require("dotenv").config();
let db = require("./model/db");
const transactionroute = require("./controller/transaction");
db.sequelize
  .authenticate()
  .then(() => {
    console.error(
      `db connected to  ${ process?.env?.SERVERHOST || "NA" } database "${process?.env?.DBNAME || "NA"}"`
      )
   db.sequelize.sync({ alter:true});
    })
  .catch((err) => {
    console.error(
      `ERROR - Unable to connect to the database: "${process.env.DB_NAME}"`,
      err
    );
    });
    app.use("/api/v1/transaction", transactionroute)

    app.listen(8003, ()=> {
        console.log("server running at port 8003"); 
});