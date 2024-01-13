const { Categorie } = require("../../db");

module.exports = async (id) => {
    const categorie = await Categorie.findByPk(id);
    if(!categorie) throw new Error("Categoria no existente");
    await categorie.destroy();
    return "Categoria eliminada correctamente";
};