const question = require("../models/question.model");
const historyStudy = require("../models/history-study.model");
const lesson = require("../models/lesson.model");
const progress = require("../models/progress.model");

class QuestionController {
  getListQuestionByIdLesson(req, res) {
    const id = req.params.id;
    try {
      question.getListQuestion(id, (err, rows) => {
        if (!err) {
          console.log("rows question", rows);
          res.status(200).send(rows);
        } else {
          res.status(500).json({ error: "error when get lesson from db" });
        }
      });
    } catch (error) {}
  }
  async submitQuestion(req, res) {
    const id = req.params.id;
    const courseId = req.params.courseId;
    const values = req.body.values;
    const userId = req.body.userId;
    try {
      question.getOptionCorrect({ id, courseId }, async (err, rows) => {
        if (!err) {
          const totalPoint = rows.reduce((acc, item) => {
            if (values[item?.idQuestion] === item?.idOption) {
              return (acc = acc + 1);
            } else {
              return acc;
            }
          }, 0);

          await historyStudy.updateHistorySubmit(
            { id, courseId, userId },
            (err, row) => {
              if (!err) {
                historyStudy.getListStudyByIdUserAndCourseId(
                  { courseId, userId },
                  (err, row) => {
                    if (!err) {
                      console.log("rows", row);
                      const userStudyLength = row.length;
                      console.log("userStudyLength", userStudyLength);
                      lesson.getListLessonByIdCourse(courseId, (err, rows) => {
                        if (!err) {
                          const lengthLesson = rows.length;

                          console.log("lengthLesson", lengthLesson);

                          progress.getProgressById(
                            { courseId, userId },

                            (err, rows) => {
                              if (!err) {
                                const progressNumber =
                                  userStudyLength / lengthLesson;
                                console.log("progressNumber", progressNumber);
                                if (rows.length > 0) {
                                  progress.updateProgress({
                                    idProgress: rows[0].idProgress,
                                    progress: progressNumber,
                                  });
                                } else {
                                  progress.insertProgress({
                                    courseId,
                                    userId,
                                    progress: progressNumber,
                                  });
                                }
                              }
                            }
                          );
                        }
                      });
                    }
                  }
                );
              }
            }
          );

          res
            .status(200)
            .send({ result: rows, point: totalPoint, values: values });
        } else {
          res.status(500).json({ error: "error when get lesson from db" });
        }
      });
    } catch (error) {}
  }
}

module.exports = new QuestionController();
