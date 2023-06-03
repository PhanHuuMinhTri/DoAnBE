const writeKanji = require("../models/write-kanji.model");

class WriteKanjiController {
  getListPracticeKanji(req, res) {
    try {
      writeKanji.getListPracticeKanji((err, rows) => {
        if (!err) {
          res.status(200).send(rows);
        } else {
          res
            .status(500)
            .json({ error: "error when get list practice kanji from db" });
        }
      });
    } catch (error) {}
  }

  getListKanjiById(req, res) {
    const id = req.params.id;

    try {
      writeKanji.getListKanji(id, (err, rows) => {
        if (!err) {
          res.status(200).send(rows);
        } else {
          res.status(500).json({ error: "error when get list  kanji from db" });
        }
      });
    } catch (error) {}
  }
}

module.exports = new WriteKanjiController();
