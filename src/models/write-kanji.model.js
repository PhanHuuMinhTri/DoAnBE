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

  addPracticeWrite(data, callback) {
    db.query(
      `INSERT INTO practicewrite ( level, namePractice ) VALUES ( '${data?.level}', '${data?.namePractice}')`,
      (err, rows) => {
        callback(err, rows);
      }
    );
  }
  updatePracticeWrite(data, callback) {
    db.query(
      `Update practicewrite set level = '${data?.level}', namePractice = '${data?.namePractice}' where id = '${data?.id}'`,
      (err, rows) => {
        callback(err, rows);
      }
    );
  }

  deletePracticeWrite(id, callback) {
    db.query(`DELETE FROM practicewrite WHERE id = '${id}'`, (err, rows) => {
      callback(err, rows);
    });
  }

  addKanji(data, callback) {
    db.query(
      `INSERT INTO kanjiwrite ( idPracticWrite, kanji ) VALUES ( '${data?.id}', '${data?.kanji}')`,
      (err, rows) => {
        console.log("err", err);
        callback(err, rows);
      }
    );
  }
  updateKanji(data, callback) {
    db.query(
      `Update kanjiwrite set kanji = '${data?.kanji}' where id = '${data?.id}'`,
      (err, rows) => {
        callback(err, rows);
      }
    );
  }

  deleteKanji(id, callback) {
    db.query(`DELETE FROM kanjiwrite WHERE id = '${id}'`, (err, rows) => {
      callback(err, rows);
    });
  }
}

module.exports = new WriteKanji();
