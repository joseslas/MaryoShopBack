const { User } = require("../../db");

module.exports = async () => {
    const allUsers = await User.findAll();
    if(!allUsers.length) throw new Error("No hay usuarios registrados");
    return allUsers;
};