const questionTest = require("../models/question-test.model");
const historyTest = require("../models/history-test.model");

class QuestionTestController {
  getListQuestionByIdTest(req, res) {
    const testId = req.params.testId;
    try {
      questionTest.getListQuestionTest(testId, (err, rows) => {
        if (!err) {
          res.status(200).send(rows);
        } else {
          res
            .status(500)
            .json({ error: "error when get question test from db" });
        }
      });
    } catch (error) {}
  }

  async submitQuestion(req, res) {
    const testId = req.params.testId;
    const values = req.body.values;
    const userId = req.body.userId;

    try {
      questionTest.getOptionCorrect(testId, async (err, rowsOptionCorrect) => {
        if (!err) {
          const totalPoint = rowsOptionCorrect.reduce((acc, item) => {
            if (values[item?.idQuestion] === item?.idOption) {
              return (acc = acc + 1);
            } else {
              return acc;
            }
          }, 0);

          await historyTest.updateHistoryTestSubmit(
            { testId, userId, totalPoint },
            (err, row) => {
              if (!err) {
                res.status(200).send({
                  result: rowsOptionCorrect,
                  point: totalPoint,
                  values: values,
                });
              } else {
                res
                  .status(500)
                  .json({ error: "error when set history from db" });
              }
            }
          );
        } else {
          res.status(500).json({ error: "error when get option correct" });
        }
      });
    } catch (error) {}
  }


  getQuestions(req, res) {
    const id = req.params.id;
    try {
      questionTest.getQuestions(id, (err, rows) => {
        if (!err) {
          res.status(200).send(rows);
        } else {
          res.status(500).json({ error: "error when get questionsfrom db" });
        }
      });
    } catch (error) {}
  }

  getQuestion(req, res) {
    const id = req.params.id;
    try {
      questionTest.getQuestion(id, (err, rows) => {
        if (!err) {
          res.status(200).send(rows);
        } else {
          res.status(500).json({ error: "error when get question from db" });
        }
      });
    } catch (error) {}
  }

  getOptionsByIdQuestion(req, res) {
    const id = req.params.id;
    try {
      questionTest.getOptions(id, (err, rows) => {
        if (!err) {
          res.status(200).send(rows);
        } else {
          res.status(500).json({ error: "error when get options from db" });
        }
      });
    } catch (error) {}
  }

  addQuestion(req, res) {
    const data = req.body;
    try {
      questionTest.addQuestion(data, (err, rows) => {
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
      questionTest.updateQuestion(data, (err, rows) => {
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
      questionTest.updateOptions({ id, data }, (err, rows) => {
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
      questionTest.deleteQuestion(id, (err, rows) => {
        if (!err) {
          res.status(200).send("Delete question success");
        } else {
          res.status(500).json({ error: "error when delete question from db" });
        }
      });
    } catch (error) {}
  }

}

module.exports = new QuestionTestController();
