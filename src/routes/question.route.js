const express = require("express");
const router = express.Router();
const QuestionController = require("../controllers/Question.controller");

router.get("/lesson/:id", QuestionController.getListQuestionByIdLesson);
router.get("/lesson-question/:id", QuestionController.getQuestions);
router.post(
  "/:courseId/submit-question/:id",
  QuestionController.submitQuestion
);

router.get("/:id", QuestionController.getQuestion);
router.get("/:id/options", QuestionController.getOptionsByIdQuestion);

router.post("/:id/options/upload", QuestionController.updateOptions);

router.post("/add", QuestionController.addQuestion);
router.post("/edit", QuestionController.updateQuestion);
router.delete("/delete/:id", QuestionController.deleteQuestion);
module.exports = router;
