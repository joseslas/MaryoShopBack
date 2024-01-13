const { Color } = require("../../db");

module.exports = async (id) => {
    const color = await Color.findByPk(id);
    if(!color) throw new Error("Color no existente");
    return color;
}