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
          res.status(200).send(rows);
        } else {
          res.status(500).json({ error: "error when get lesson from db" });
        }
      });
    } catch (error) {}
  }

  getQuestions(req, res) {
    const id = req.params.id;
    try {
      question.getQuestions(id, (err, rows) => {
        if (!err) {
          res.status(200).send(rows);
        } else {
          res.status(500).json({ error: "error when get lesson from db" });
        }
      });
    } catch (error) {}
  }

  getQuestion(req, res) {
    const id = req.params.id;
    try {
      question.getQuestion(id, (err, rows) => {
        if (!err) {
          res.status(200).send(rows);
        } else {
          res.status(500).json({ error: "error when get lesson from db" });
        }
      });
    } catch (error) {}
  }

  getOptionsByIdQuestion(req, res) {
    const id = req.params.id;
    try {
      question.getOptions(id, (err, rows) => {
        if (!err) {
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
                      const userStudyLength = row.length;
                      lesson.getListLessonByIdCourse(courseId, (err, rows) => {
                        if (!err) {
                          const lengthLesson = rows.length;

                          progress.getProgressById(
                            { courseId, userId },

                            (err, rows) => {
                              if (!err) {
                                const progressNumber =
                                  userStudyLength / lengthLesson;
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

  addQuestion(req, res) {
    const data = req.body;
    try {
      question.addQuestion(data, (err, rows) => {
        if (!err) {
          res.status(200).send("Add question success");
        } else {
          res.status(500).json({ error: "error when set question from db" });
        }
      });
    } catch (error) {}
  }

  updateQuestion(req, res) {
    const data = req.body;
    try {
      question.updateQuestion(data, (err, rows) => {
        if (!err) {
          res.status(200).send("Update question success");
        } else {
          res.status(500).json({ error: "error when set question from db" });
        }
      });
    } catch (error) {}
  }

  updateOptions(req, res) {
    const id = req.params.id;
    const data = req.body;
    try {
      question.updateOptions({ id, data }, (err, rows) => {
        console.log("error", err);
        console.log("row", rows);
        if (!err) {
          res.status(200).send("Update options success");
        } else {
          res.status(500).json({ error: "error when set options from db" });
        }
      });
    } catch (error) {}
  }

  deleteQuestion(req, res) {
    const id = req.params.id;
    try {
      question.deleteQuestion(id, (err, rows) => {
        if (!err) {
          res.status(200).send("Delete question success");
        } else {
          res.status(500).json({ error: "error when delete question from db" });
        }
      });
    } catch (error) {}
  }
}

module.exports = new QuestionController();
