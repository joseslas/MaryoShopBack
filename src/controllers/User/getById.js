const { User } = require("../../db")

module.exports = async (id) => {
    const user = await User.findByPk(id);
    if(!user) throw new Error("Usuario no existente");
    return user;
}