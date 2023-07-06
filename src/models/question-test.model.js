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

  getQuestions(id, callback) {
    db.query(
      `Select * from questiontestonline where idTest='${id}' `,
      (err, rows) => {
        callback(err, rows);
      }
    );
  }

  getQuestion(id, callback) {
    db.query(
      `Select * from questiontestonline where idQuestion='${id}' `,
      (err, rows) => {
        callback(err, rows);
      }
    );
  }

  getOptions(id, callback) {
    db.query(
      `Select * from  optionstest where idQuestion = '${id}' `,
      (err, rows) => {
        callback(err, rows);
      }
    );
  }

  addQuestion(data, callback) {
    db.query(
      `INSERT INTO questiontestonline ( idTest  ,questionText ) VALUES ( '${data?.idTest}', '${data?.questionText}')`,
      (err, rows) => {
        callback(err, rows);
      }
    );
  }
  updateQuestion(data, callback) {
    db.query(
      `Update questiontestonline set questionText = '${data?.questionText}'   where idQuestion ='${data?.idQuestion}'`,
      (err, rows) => {
        callback(err, rows);
      }
    );
  }

  updateOptions({ id, data }, callback) {
    try {
      data.options.forEach((element) => {
        if (element?.idOption) {
          db.query(
            `Update optionstest set optionText = '${
              element?.optionText
            }', isCorrect ='${element?.isCorrect ? 1 : 0}' where idOption ='${
              element?.idOption
            }'`
          );
        } else {
          db.query(
            `INSERT INTO optionstest ( idQuestion, optionText, isCorrect) VALUES ( '${id}', '${
              element?.optionText
            }', '${element?.isCorrect ? 1 : 0}')`
          );
        }
      });

      callback(false, "Update option success");
    } catch (error) {
      console.log("error", error);
      callback(true, "Update option fail");
    }
  }

  deleteQuestion(id, callback) {
    db.query(
      `DELETE FROM questiontestonline WHERE idQuestion = '${id}'`,
      (err, rows) => {
        callback(err, rows);
      }
    );
  }
}

module.exports = new QuestionTest();
