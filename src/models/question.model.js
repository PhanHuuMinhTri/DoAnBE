const db = require("../config/db");

class Question {
  getListQuestion(id, callback) {
    db.query(
      `Select question.idQuestion, question.question, options.idOption, options.optionText, options.isCorrect from question join options on question.idQuestion = options.idQuestion where question.idLesson='${id}' `,
      (err, rows) => {
        callback(err, rows);
      }
    );
  }

  getQuestions(id, callback) {
    db.query(`Select * from question where idLesson='${id}' `, (err, rows) => {
      callback(err, rows);
    });
  }

  getQuestion(id, callback) {
    db.query(
      `Select * from question where idQuestion='${id}' `,
      (err, rows) => {
        callback(err, rows);
      }
    );
  }

  getOptionCorrect({ id, courseId }, callback) {
    db.query(
      `Select question.idQuestion, question.question, options.idOption, options.optionText, options.isCorrect from question join options on question.idQuestion = options.idQuestion JOIN lesson ON question.idLesson = lesson.idLesson where  lesson.idCourse = ${courseId} && question.idLesson=${id} && options.isCorrect = '1' `,
      (err, rows) => {
        callback(err, rows);
      }
    );
  }

  getOptions(id, callback) {
    db.query(
      `Select * from  options where idQuestion = '${id}' `,
      (err, rows) => {
        callback(err, rows);
      }
    );
  }

  addQuestion(data, callback) {
    db.query(
      `INSERT INTO question ( idLesson  ,question ) VALUES ( '${data?.idLesson}', '${data?.question}')`,
      (err, rows) => {
        console.log("err", err);
        callback(err, rows);
      }
    );
  }
  updateQuestion(data, callback) {
    db.query(
      `Update question set question = '${data?.question}'   where idQuestion ='${data?.idQuestion}'`,
      (err, rows) => {
        console.log("err", err);
        callback(err, rows);
      }
    );
  }

  updateOptions({ id, data }, callback) {
    console.log("data", data.options);
    console.log("id", id);
    data.options.forEach((element) => {
      console.log("element", element);
      if (element?.idOption) {
        console.log("zo day1");
        db.query(
          `Update options set optionText = '${
            element?.optionText
          }', isCorrect ='${element?.isCorrect ? 1 : 0}' where idOption ='${
            element?.idOption
          }'`
        );
      } else {
        console.log("zo day2", element);
        db.query(
          `INSERT INTO options ( idQuestion, optionText, isCorrect) VALUES ( '${id}', '${
            element?.optionText
          }', '${element?.isCorrect ? 1 : 0}')`
        );
      }
    });

    callback(false, "");
  }

  deleteQuestion(id, callback) {
    db.query(`DELETE FROM question WHERE idQuestion = '${id}'`, (err, rows) => {
      console.log("err", err);
      callback(err, rows);
    });
  }
}

module.exports = new Question();
