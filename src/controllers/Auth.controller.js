const auth = require("../models/auth.model");

class AuthController {
  login(req, res) {
    auth.login(req.body, (err, rows) => {
      if (!err) {
        if (rows.length > 0) {
          const account = { idUser: rows[0]?.IdAccount, name: rows[0]?.Name };

          res.status(200).send(account);
        } else {
          res.status(400).json({ error: "user or password invalid" });
        }
      } else {
        res.status(400).json({ error: "error" });
      }
    });
  }

  register(req, res) {
    auth.register(req.body, (err, rows) => {
      if (!err) {
        res.status(200).json({ error: "Register success!" });
      } else {
        res.status(400).json({ error: "error" });
      }
    });
  }
}

module.exports = new AuthController();
