const sequelize = require("sequelize");
const {DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize)=> {
    const transaction = sequelize.define(
        "transaction",
        {
            id: {
                type :DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            amount: {
                type: DataTypes.FLOAT,
                allowNull: false,
              },
              source: {
                type: DataTypes.STRING,
                allowNull: false,
              },
              description: {
                type: DataTypes.STRING,
                allowNull: true,
              },
              date: {
                type: DataTypes.DATE,
                allowNull: false,
              },
        },
        { tabelName :"transactions"}
    );
    return transaction;
}