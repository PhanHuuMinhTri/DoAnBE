const express = require("express");
const router = express.Router();
const TestOnlineController = require("../controllers/TestOnline.controller");
const QuestionTestController = require("../controllers/QuestionTest.controller");

router.get("/", TestOnlineController.getListTestOnline);
router.get("/testinfo/:id", TestOnlineController.getTestOnline);
router.get("/:userId", TestOnlineController.getListTestOnlineByUser);
router.get(
  "/question-test/:testId",
  QuestionTestController.getListQuestionByIdTest
);

router.post("/:testId/submit-question", QuestionTestController.submitQuestion);
router.get("/rank/:testId", TestOnlineController.getRankTestOnline);

router.post("/add", TestOnlineController.addTestOnline);
router.post("/edit", TestOnlineController.updateTestOnline);
router.delete("/delete/:id", TestOnlineController.deleteTestOnline);

module.exports = router;
