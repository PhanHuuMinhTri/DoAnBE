const homeRouter = require("./home.route");

function route(app) {
  app.get("/", (req, res) => {
    res.send("CsaccasdasdaccdC");
  });

  app.use("/home", homeRouter);
}

module.exports = route;
