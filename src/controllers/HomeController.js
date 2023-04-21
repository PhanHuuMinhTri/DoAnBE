const sv = require("../models/sv.model");

class HomeController {
  // [GET] / home
  index(req, res) {
    res.send("Home ne");
  }

  showHome(req, res) {
    sv.getAllData((err, rows) => {
      if (!err) {
        res.json(rows);
      } else {
        res.status(400).json({ error: "error" });
      }
    });
  }
}

module.exports = new HomeController();
