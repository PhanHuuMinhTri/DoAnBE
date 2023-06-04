const express = require("express");
const router = express.Router();
const historyStudy = require("../controllers/HistoryStudy.controller");

router.use("/:idCourse/:idLesson/:idUser", historyStudy.getHistoryByUser);

module.exports = router;
