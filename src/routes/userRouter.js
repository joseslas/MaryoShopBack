const { Router } = require("express");
const register = require("../controllers/User/createUser");
const getAllusers = require("../controllers/User/getAll");
const userById = require("../controllers/User/getById");
const updateUser = require("../controllers/User/updateUser");
const deleteOrRenew = require("../controllers/User/deleteOrRenewUser");

const router = Router();

//Ruta para obtener a todos los usuarios
router.get("/", async (req, res) => {
    try {
        const Allusers = await getAllusers();
        return res.status(200).json(Allusers);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

//Ruta para obtener usuario por id
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userById(id);
        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
});

//Ruta para crear usuario
router.post("/register", async (req, res) => {
    try {
        const data = req.body;
        await register(data);

        return res.status(200).send("Usuario registrado correctamente");
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
});

//Ruta para actualizar usuario
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const user = await updateUser(id, data);

        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

//Ruta para deshabilitar el usuario si esta habilitado y viceversa
router.put("/user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const message = await deleteOrRenew(id);
        return res.status(200).send(message);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

module.exports = router;