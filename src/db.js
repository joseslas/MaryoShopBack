require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST} = process.env;
const fs = require("fs");
const path = require("path");

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "postgres",
    logging: false
});

const basename = path.basename(__filename);
const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
.filter((file) => (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js"))
.forEach((file) => modelDefiners.push(require(path.join(__dirname, "models", file))));

modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capEntries);

const { Categorie, Color, Order, Product, Size, User, Variant } = sequelize.models;

Product.belongsToMany(Size, { through: Variant });
Size.belongsToMany(Product, { through: Variant });

Product.belongsToMany(Color, { through: Variant });
Color.belongsToMany(Product, { through: Variant });

Order.belongsToMany(Product, { through: "OrderProduct", as: "orderedProducts" });
Product.belongsToMany(Product, { through: "orderProduct", as: "orderingProducts"});

Product.hasMany(Categorie);
Categorie.belongsTo(Product);

Order.belongsTo(User);
User.hasMany(Order);

module.exports = {
    ...sequelize.models,
    conn: sequelize
};