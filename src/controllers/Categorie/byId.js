const { Categorie } = require("../../db");

module.exports = async (id) => {
    const categorie = await Categorie.findByPk(id);
    if(!categorie) throw new Error("No existe esa categoria");
    return categorie;
};