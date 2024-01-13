const { Categorie } = require("../../db");

module.exports = async (data) => {
    if(!data.name) throw new Error("Se necesita un nombre para la categoria");
    await Categorie.create(data);
    return "Categoria creada correctamente.";
};