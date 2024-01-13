const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("color", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        hexaColor: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    })
};