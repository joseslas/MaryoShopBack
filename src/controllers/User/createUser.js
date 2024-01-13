const { User } = require("../../db");
const bcryptjs = require("bcryptjs");

module.exports = async (data) => {
    const { name, lastName, userName, email, address, phone, password, token } = data;
    
    if(!name || !lastName || !userName || !email || !address || !phone) throw new Error("Faltan datos");
    if(!password && !token) throw new Error("No hay datos de autenticacion");

    const user = {
        name,
        lastName,
        userName,
        email,
        address,
        phone
    };

    if(password) user.password = await bcryptjs.hash(password, 10);
    if(token) user.token = token;

    await User.create(user);
    
};