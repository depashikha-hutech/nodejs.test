const sequelize = require("sequelize");
const {DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize)=> {
    const Users = sequelize.define(
        "transaction",
        {
            id: {
                type :DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            amountcredited:{type:DataTypes.STRING,allowNull: false, unique: true},
            ammountdebited:{type:DataTypes.STRING,allowNull: false},
            source:{type:DataTypes.STRING,allowNull:false},
            description:{type:DataTypes.STRING,defaultValue: true},
            date:{type:DataTypes.DATEONLY,allowNull: false},
            time:{type:DataTypes.TIME,allowNull: false},
        },
        { tabelName :"transactions"}
    );
    return Users;
}