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
}

module.exports = new FlaskCardController();
