const express = require("express");
const router = express.Router();
const FlaskCardController = require("../controllers/FlaskCard.controller");

router.get("/:id", FlaskCardController.getFlaskCardByIdLesson);
router.get("/item/:id", FlaskCardController.getFlaskCard);
router.post("/add", FlaskCardController.addFlaskCard);
router.post("/edit", FlaskCardController.updateFlaskCard);
router.delete("/delete/:id", FlaskCardController.deleteFlaskCard);

module.exports = router;
