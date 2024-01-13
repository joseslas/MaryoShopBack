const { Router } = require("express");
const userRouter = require("./userRouter");
const categorieRouter = require("./categorieRouter");
const colorRouter = require("./colorRouter");

const router = Router();

router.use("/users", userRouter);
router.use("/categories", categorieRouter);
router.use("/colors", colorRouter);

module.exports = router;