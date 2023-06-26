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

  getFlaskCard(id, callback) {
    db.query(
      `Select * from flaskcard where idFlaskCard = '${id}' `,
      (err, rows) => {
        callback(err, rows);
      }
    );
  }

  addFlashCard(data, callback) {
    console.log("dataadd", data);
    db.query(
      `INSERT INTO flaskcard ( idLesson, sidebefore, sideafter ) VALUES ( '${data?.idLesson}', '${data?.sidebefore}', '${data.sideafter}')`,
      (err, rows) => {
        console.log("err", err);
        callback(err, rows);
      }
    );
  }
  updateFlashCard(data, callback) {
    console.log("dataedit", data);
    db.query(
      `Update flaskcard set   sidebefore = '${data?.sidebefore}', sideafter= '${data?.sideafter}'  where idFlaskCard ='${data?.idFlaskCard}'`,
      (err, rows) => {
        console.log("err", err);
        callback(err, rows);
      }
    );
  }

  deleteFlashCard(id, callback) {
    db.query(
      `DELETE FROM flaskcard WHERE idFlaskCard = '${id}'`,
      (err, rows) => {
        console.log("err", err);
        callback(err, rows);
      }
    );
  }
}

module.exports = new FlaskCard();
