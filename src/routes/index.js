const homeRouter = require("./home.route");
const authRouter = require("./auth.route");
const courseRouter = require("./course.route.js");
const writeKanjiRouter = require("./write-kanji.route");
const lessonRouter = require("./lesson.route");
const flaskCardRouter = require("./flaskCard.route");
const questionRouter = require("./question.route");
const progressRouter = require("./progress.route");
const historyStudyRouter = require("./historyStudy.route");
const testOnlineRouter = require("./test-online.route");
const teacherRouter = require("./teacher.route");

function route(app) {
  app.use("/home", homeRouter);
  app.use("/auth", authRouter);
  app.use("/course", courseRouter);
  app.use("/write-kanji", writeKanjiRouter);
  app.use("/lesson", lessonRouter);
  app.use("/flask-card", flaskCardRouter);
  app.use("/question", questionRouter);
  app.use("/progress", progressRouter);
  app.use("/history", historyStudyRouter);
  app.use("/test-online", testOnlineRouter);
  app.use("/teacher", teacherRouter);
}

module.exports = route;
