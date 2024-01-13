const { Color } = require("../../db");

module.exports = async () => {
    const colors = await Color.findAll();
    if(!colors.length) throw new Error("No hay colores existentes");
    return colors;
};