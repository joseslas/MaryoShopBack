const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        isDisable: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        token: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        timestamps: true
    });
};