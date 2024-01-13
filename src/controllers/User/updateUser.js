const { User } = require("../../db");

module.exports = async (id, data) => {
    const user = await User.findByPk(id);
    if(!user) throw new Error("Usuario no encontrado");
    await user.update(data);
    return "Usuario actualizado correctamente";
}