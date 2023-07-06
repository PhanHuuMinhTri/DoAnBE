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

  addPracticeWrite(req, res) {
    const data = req.body;
    try {
      writeKanji.addPracticeWrite(data, (err, rows) => {
        if (!err) {
          res.status(200).send("Add test write success");
        } else {
          res.status(500).json({ error: "error when set test write from db" });
        }
      });
    } catch (error) {}
  }

  updatePracticeWrite(req, res) {
    const data = req.body;
    try {
      writeKanji.updatePracticeWrite(data, (err, rows) => {
        if (!err) {
          res.status(200).send("Update test write success");
        } else {
          res.status(500).json({ error: "error when set test write  from db" });
        }
      });
    } catch (error) {}
  }

  deletePracticeWrite(req, res) {
    const id = req.params.id;
    try {
      writeKanji.deletePracticeWrite(id, (err, rows) => {
        if (!err) {
          res.status(200).send("Delete test write success");
        } else {
          res
            .status(500)
            .json({ error: "error when delete test write from db" });
        }
      });
    } catch (error) {}
  }

  addKanji(req, res) {
    const data = req.body;
    try {
      writeKanji.addKanji(data, (err, rows) => {
        if (!err) {
          res.status(200).send("Add kanji success");
        } else {
          res.status(500).json({ error: "error when set kanji from db" });
        }
      });
    } catch (error) {}
  }

  updateKanji(req, res) {
    const data = req.body;
    try {
      writeKanji.updateKanji(data, (err, rows) => {
        if (!err) {
          res.status(200).send("Update kanji success");
        } else {
          res.status(500).json({ error: "error when set kanji  from db" });
        }
      });
    } catch (error) {}
  }

  deleteKanji(req, res) {
    const id = req.params.id;
    try {
      writeKanji.deleteKanji(id, (err, rows) => {
        if (!err) {
          res.status(200).send("Delete kanji success");
        } else {
          res.status(500).json({ error: "error when delete kanji from db" });
        }
      });
    } catch (error) {}
  }
}

module.exports = new WriteKanjiController();
