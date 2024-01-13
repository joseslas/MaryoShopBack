const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("product", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        price: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        images: {
            type: DataTypes.ARRAY(DataTypes.JSONB),
            defaultValue: []
        }
    },
    {
        timestamps: true
    })
};