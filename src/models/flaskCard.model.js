const db = require("../config/db");

class FlaskCard {
  getFlaskCardByIdLesson(id, callback) {
    db.query(
      `Select * from flaskcard where idLesson = '${id}' `,
      (err, rows) => {
        callback(err, rows);
      }
    );
  }
}

module.exports = new FlaskCard();
