const { Router } = require("express");
const getCategories = require("../controllers/Categorie/getAll");
const createCategorie = require("../controllers/Categorie/createCategorie");
const findCategorie = require("../controllers/Categorie/byName");
const deleteCategorie = require("../controllers/Categorie/deleteCategorie");
const updateCategory = require("../controllers/Categorie/updateCategorie");
const categoryById = require("../controllers/Categorie/byId");

const router = Router();

router.get("/", async (req, res) => {
    const { name } = req.query;
    let byName = [];
    try {
        if(name) byName = await findCategorie(name);
        const categories = await getCategories();
        return res.status(200).json(byName.length ? byName : categories);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const data = req.body;
        const response = await createCategorie(data);
        return res.status(200).send(response)
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const message = await deleteCategorie(id);
        return res.status(200).send(message);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const message = await updateCategory(id, data);
        return res.status(200).send(message);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const category = await categoryById(id);
        return res.status(200).json(category);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

module.exports = router;