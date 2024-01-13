const { Categorie } = require("../../db");

module.exports = async () => {
    const categories = await Categorie.findAll();
    if(!categories.length) throw new Error("No hay categorias existentes");
    return categories;
};