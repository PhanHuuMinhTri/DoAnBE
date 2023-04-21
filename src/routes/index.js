const homeRouter = require("./home.route");
const authRouter = require("./auth.route");

function route(app) {
  app.get("/", (req, res) => {
    res.send("Home ne");
  });

  app.use("/home", homeRouter);
  app.use("/auth", authRouter);
}

module.exports = route;
