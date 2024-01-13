const { Size } = require("../../db");

module.exports = async () => {
    const sizes = await Size.findAll();
    if(!sizes.length) throw new Error("No hay tallas existentes");
    return sizes;
};