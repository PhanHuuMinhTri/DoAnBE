const express = require("express");
const router = express.Router();
const FlaskCardController = require("../controllers/FlaskCard.controller");

router.get("/:id", FlaskCardController.getFlaskCardByIdLesson);

module.exports = router;
