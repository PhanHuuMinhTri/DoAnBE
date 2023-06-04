const express = require("express");
const router = express.Router();
const QuestionController = require("../controllers/Question.controller");

router.get("/lesson/:id", QuestionController.getListQuestionByIdLesson);
router.post(
  "/:courseId/submit-question/:id",
  QuestionController.submitQuestion
);
module.exports = router;
