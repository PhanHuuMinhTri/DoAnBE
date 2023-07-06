const db = require("../config/db");

class TestOnline {
  getListTestOnline(callback) {
    db.query(`select * from lessontestonline`, (err, row) => {
      callback(err, row);
    });
  }

  getTestOnline(id, callback) {
    db.query(
      `select * from lessontestonline where idLessonTest ='${id}'`,
      (err, row) => {
        callback(err, row);
      }
    );
  }

  getListTestOnlineByUser(userId, callback) {
    db.query(
      `SELECT * FROM lessontestonline JOIN historytest ON lessontestonline.idLessonTest = historytest.idLessonTest WHERE historytest.idUser='${userId}'`,
      (err, row) => {
        callback(err, row);
      }
    );
  }

  addTestOnline(data, callback) {
    db.query(
      `INSERT INTO lessontestonline ( nameTest, description ) VALUES ( '${data?.nameTest}', '${data?.description}')`,
      (err, rows) => {
        console.log("err", err);
        callback(err, rows);
      }
    );
  }
  updateTestOnline(data, callback) {
    db.query(
      `Update lessontestonline set nameTest = '${data?.nameTest}', description = '${data?.description}' where idLessonTest = '${data?.idLessonTest}'`,
      (err, rows) => {
        console.log("err", err);
        callback(err, rows);
      }
    );
  }

  deleteTestOnline(id, callback) {
    db.query(
      `DELETE FROM lessontestonline WHERE idLessonTest = '${id}'`,
      (err, rows) => {
        console.log("err", err);
        callback(err, rows);
      }
    );
  }
}

module.exports = new TestOnline();
