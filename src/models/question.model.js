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

  getOptionCorrect({ id, courseId }, callback) {
    db.query(
      `Select question.idQuestion, question.question, options.idOption, options.optionText, options.isCorrect from question join options on question.idQuestion = options.idQuestion JOIN lesson ON question.idLesson = lesson.idLesson where  lesson.idCourse = ${courseId} && question.idLesson=${id} && options.isCorrect = '1' `,
      (err, rows) => {
        callback(err, rows);
      }
    );
  }
}

module.exports = new Question();
