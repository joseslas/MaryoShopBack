const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("variant", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    })
}