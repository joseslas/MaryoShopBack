const { Size } = require("../../db");

module.exports = async (data) => {
    const data = data;
    if(!data) throw new Error("Datos incompletos");
    await Size.create(data);
    return "Talla creada correctamente.";
};