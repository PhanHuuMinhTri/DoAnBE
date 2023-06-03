const db = require("../config/db");

class WriteKanji {
  getListPracticeKanji(callback) {
    db.query(`Select * from practicewrite`, (err, rows) => {
      callback(err, rows);
    });
  }

  getListKanji(id, callback) {
    db.query(
      `Select * from kanjiwrite where idPracticWrite = '${id}'`,
      (err, rows) => {
        callback(err, rows);
      }
    );
  }
}

module.exports = new WriteKanji();
