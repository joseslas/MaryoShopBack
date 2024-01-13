const { Categorie } = require("../../db");

module.exports = async (name) => {
    console.log(name);
    const byName = await Categorie.findAll({
        where: { name: name },
    });
    if(!name) throw new Error("Se requiere un nombre")
    if(!byName.length) throw new Error("Categoria no encontrada");
    return byName;
};