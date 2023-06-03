const homeRouter = require("./home.route");
const authRouter = require("./auth.route");
const courseRouter = require("./course.route.js");
const writeKanjiRouter = require("./write-kanji.route");
const lessonRouter = require("./lesson.route");
const flaskCardRouter = require("./flaskCard.route");

function route(app) {
  app.get("/", (req, res) => {
    res.send("Home ne");
  });

  app.use("/home", homeRouter);
  app.use("/auth", authRouter);
  app.use("/course", courseRouter);
  app.use("/write-kanji", writeKanjiRouter);
  app.use("/lesson", lessonRouter);
  app.use("/flask-card", flaskCardRouter);
}

module.exports = route;
