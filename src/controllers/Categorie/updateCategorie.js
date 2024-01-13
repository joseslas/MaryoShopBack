const { Categorie } = require("../../db");

module.exports = async (id, data) => {
    const categorie = await Categorie.findByPk(id);
    if(!data) throw new Error("Se necesitan los datos a actualizar");
    if(!categorie) throw new Error("Categoria inexistente");
    await categorie.update(data);
    return "Categoria actualizada correctamente";
};