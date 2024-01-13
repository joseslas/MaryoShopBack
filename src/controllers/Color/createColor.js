const { Color } = require("../../db");

module.exports = async (data) => {
    const { name, hexaColor } = data;
    if(!name || !hexaColor) throw new Error("Faltan datos");
    const color = {
        name,
        hexaColor
    };
    await Color.create(color);
    return "Color creado correctamente";
};