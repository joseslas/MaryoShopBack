const server = require("./app");
const { conn } = require("./db");

conn.sync({ alter: true }).then(() => {
    server.listen(3001, () => {
        console.log("Server listening on port 3001");
    })
}) 