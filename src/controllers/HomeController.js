const modelSV = require("../models/sv.model");

class HomeController {
  // [GET] / home
  index(req, res) {
    res.send("Home ne");
  }

  showHome(req, res) {
    modelSV.getAllData((rows) => {
      res.send(rows);
    });
  }
}

module.exports = new HomeController();
