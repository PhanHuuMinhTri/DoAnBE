const db = require("../config/db");

class HistoryTest {
  updateHistoryTestSubmit({ testId, userId, totalPoint }, callback) {
    db.query(
      `select * from historytest where idLessonTest = '${testId}' && idUser = '${userId}'`,
      (err, rows) => {
        if (rows?.length === 0) {
          db.query(
            `INSERT INTO historytest (idLessonTest, point, idUser) VALUES ('${testId}', '${totalPoint}', '${userId}')`,
            (err, rows) => {
              callback(err, rows);
            }
          );
        } else {
          callback(err, rows);
        }
      }
    );
  }
  getRankTest(testId, callback) {
    db.query(
      `SELECT * FROM historytest JOIN user on historytest.idUser = user.IdUser WHERE idLessonTest = '${testId}' ORDER BY historytest.point DESC`,
      (err, row) => {
        callback(err, row);
      }
    );
  }
}

module.exports = new HistoryTest();
