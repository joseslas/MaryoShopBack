const { Size } = require("../../db");

module.exports = async (id) => {
    const size = await Size.findByPk(id);
    if(!size) throw new Error("Talla no existente");
    await size.destroy();
    return "Talla eliminada correctamente";
};