const express = require("express");
const router = express.Router();
const WriteKanjiController = require("../controllers/WriteKanji.controller");

router.get("/practice-kanji", WriteKanjiController.getListPracticeKanji);
router.get("/practice-kanji/:id", WriteKanjiController.getListKanjiById);
router.post("/add", WriteKanjiController.addPracticeWrite);
router.post("/edit", WriteKanjiController.updatePracticeWrite);
router.delete("/delete/:id", WriteKanjiController.deletePracticeWrite);
router.post("/kanji/add", WriteKanjiController.addKanji);
router.post("/kanji/edit", WriteKanjiController.updateKanji);
router.delete("/kanji/delete/:id", WriteKanjiController.deleteKanji);
module.exports = router;
