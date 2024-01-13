const { User } = require("../../db");

module.exports = async (id) => {
    const user = await User.findByPk(id);
    if(!user) throw new Error("Usuario no encontrado");
    const status = user.isDisable;
    user.isDisable = !status;
    console.log(user);
    await user.save();
    return user.isDisable ?  "Usuario desactivado correctamente" : "Usuario renovado correctamente";
};