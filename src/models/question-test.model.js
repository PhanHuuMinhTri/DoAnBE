const db = require("../config/db");

class QuestionTest {
  getListQuestionTest(idTest, callback) {
    db.query(
      `Select questiontestonline.idQuestion, questiontestonline.questionText, optionstest.idOption, optionstest.optionText, optionstest.isCorrect from questiontestonline join optionstest on questiontestonline.idQuestion = optionstest.idQuestion where questiontestonline.idTest='${idTest}' `,
      (err, rows) => {
        callback(err, rows);
      }
    );
  }

  getOptionCorrect(idTest, callback) {
    db.query(
      `Select questiontestonline.idQuestion, questiontestonline.questionText, optionstest.idOption, optionstest.optionText, optionstest.isCorrect from questiontestonline join optionstest on questiontestonline.idQuestion = optionstest.idQuestion where questiontestonline.idTest=${idTest} && optionstest.isCorrect = '1' `,
      (err, rows) => {
        callback(err, rows);
      }
    );
  }
}

module.exports = new QuestionTest();
