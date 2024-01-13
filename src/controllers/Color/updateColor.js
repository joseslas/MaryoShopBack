const { Color } = require("../../db");

module.exports = async (id, data) => {
    const color = await Color.findByPk(id);
    if(!color) throw new Error("Color no existente");
    if(!data) throw new Error("Faltan datos");
    await color.update(data)
    return "Color actualizado de forma correcta";
};