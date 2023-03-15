const sequelize = require("sequelize");
const {DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize)=> {
    const Customer = sequelize.define(
        "Customer",
        {
            id: {
                type :DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            name:{type:DataTypes.STRING,allowNull: false, unique: true},
            ammountinaccount:{type:DataTypes.STRING,allowNull: false},
            totalearning:{type:DataTypes.STRING,allowNull: false},
        },
        { tabelName :"customers"}
    );
    return Customer;
}