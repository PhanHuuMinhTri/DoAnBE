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
                  .json({ error: "error when get lesson from db" });
              }
            }
          );
        } else {
          res.status(500).json({ error: "error when get lesson from db" });
        }
      });
    } catch (error) {}
  }
}

module.exports = new QuestionTestController();
