const flaskCard = require("../models/flaskCard.model");

class FlaskCardController {
  getFlaskCardByIdLesson(req, res) {
    const id = req.params.id;
    try {
      flaskCard.getFlaskCardByIdLesson(id, (err, rows) => {
        if (!err) {
          res.status(200).send(rows);
        } else {
          res.status(500).json({ error: "error when get course from db" });
        }
      });
    } catch (error) {}
  }

  getFlaskCard(req, res) {
    const id = req.params.id;
    try {
      flaskCard.getFlaskCard(id, (err, rows) => {
        if (!err) {
          res.status(200).send(rows);
        } else {
          res.status(500).json({ error: "error when get course from db" });
        }
      });
    } catch (error) {}
  }

  addFlaskCard(req, res) {
    const data = req.body;
    try {
      flaskCard.addFlashCard(data, (err, rows) => {
        if (!err) {
          res.status(200).send("Add flaskcard success");
        } else {
          res.status(500).json({ error: "error when set flaskcard from db" });
        }
      });
    } catch (error) {}
  }

  updateFlaskCard(req, res) {
    const data = req.body;
    try {
      flaskCard.updateFlashCard(data, (err, rows) => {
        if (!err) {
          res.status(200).send("Update flaskCard success");
        } else {
          res.status(500).json({ error: "error when set flaskCard from db" });
        }
      });
    } catch (error) {}
  }

  deleteFlaskCard(req, res) {
    const id = req.params.id;
    try {
      flaskCard.deleteFlashCard(id, (err, rows) => {
        if (!err) {
          res.status(200).send("Delete flaskCard success");
        } else {
          res
            .status(500)
            .json({ error: "error when delete flaskcards from db" });
        }
      });
    } catch (error) {}
  }
}

module.exports = new FlaskCardController();
