const auth = require("../models/auth.model");

class AuthController {
  login(req, res) {
    auth.login(req.body, (err, rows) => {
      if (!err) {
        console.log("row", rows);
        res.status(200).send(rows);
      } else {
        res.status(400).json({ error: "error" });
      }
    });
  }
}

module.exports = new AuthController();
