const express = require("express");
const router = express.Router();
const WriteKanjiController = require("../controllers/WriteKanji.controller");

router.get("/practice-kanji", WriteKanjiController.getListPracticeKanji);
router.get("/practice-kanji/:id", WriteKanjiController.getListKanjiById);

module.exports = router;
