const { Router } = require("express");
const getColors = require("../controllers/Color/getAll");
const createColor = require("../controllers/Color/createColor");
const getColor = require("../controllers/Color/getColor");
const deleteColor = require("../controllers/Color/deleteColor");
const updateColor = require("../controllers/Color/updateColor");

const server = Router();

server.get("/", async (req, res) => {
    try {
        const colors = await getColors();
        return res.status(200).json(colors);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

server.post("/", async (req ,res) => {
    const data = req.body;
    try {
        const message = await createColor(data);
        return res.status(200).send(message);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

server.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const color = await getColor(id);
        return res.status(200).json(color);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

server.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const message = await deleteColor(id);
        return res.status(200).send(message);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

server.put("/:id", async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const message = await updateColor(id, data);
        return res.status(200).send(message);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

module.exports = server;