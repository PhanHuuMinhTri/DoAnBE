const db = require("../config/db");

class TestOnline {
  getListTestOnline(callback) {
    db.query(`select * from lessontestonline`, (err, row) => {
      callback(err, row);
    });
  }

  getListTestOnlineByUser(userId, callback) {
    db.query(
      `SELECT * FROM lessontestonline JOIN historytest ON lessontestonline.idLessonTest = historytest.idLessonTest WHERE historytest.idUser='${userId}'`,
      (err, row) => {
        callback(err, row);
      }
    );
  }
}

module.exports = new TestOnline();
