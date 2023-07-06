const express = require("express");
const router = express.Router();
const QuestionTestController = require("../controllers/QuestionTest.controller");

router.get("/test/:id", QuestionTestController.getListQuestionByIdTest);
router.get("/test-question/:id", QuestionTestController.getQuestions);
// router.post(
//   "/:courseId/submit-question/:id",
//   QuestionController.submitQuestion
// );

router.get("/:id", QuestionTestController.getQuestion);
router.get("/:id/options", QuestionTestController.getOptionsByIdQuestion);

router.post("/:id/options/upload", QuestionTestController.updateOptions);

router.post("/add", QuestionTestController.addQuestion);
router.post("/edit", QuestionTestController.updateQuestion);
router.delete("/delete/:id", QuestionTestController.deleteQuestion);
module.exports = router;
