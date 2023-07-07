const auth = require("../models/auth.model");

class AuthController {
  login(req, res) {
    auth.login(req.body, (err, rows) => {
      if (!err) {
        if (rows.length > 0) {
          const account = { idUser: rows[0]?.IdUser, name: rows[0]?.Name };

          res.status(200).send(account);
        } else {
          res.status(400).json({ error: "user or password invalid" });
        }
      } else {
        res.status(400).json({ error: "error" });
      }
    });
  }

  loginAdmin(req, res) {
    auth.loginAdmin(req.body, (err, rows) => {
      if (!err) {
        if (rows.length > 0) {
          const account = { idUser: rows[0]?.IdUser, name: rows[0]?.Name };
          console.log('account', account)

          res.status(200).send(account);
        } else {
          res.status(400).json({ error: "user or password invalid" });
        }
      } else {
        res.status(400).json({ error: "error" });
      }
    });
  }

  getProfile(req, res) {
    const id = req.params.id;
    auth.getProfile(id, (err, rows) => {
      if (!err) {
        res.status(200).send(rows[0]);
      } else {
        res.status(400).json({ error: "error" });
      }
    });
  }

  getUser(req, res) {
    auth.getUser((err, rows) => {
      if (!err) {
        res.status(200).send(rows);
      } else {
        res.status(400).json({ error: "error" });
      }
    });
  }

  deleteUser(req, res) {
    console.log("zo day");
    const id = req.params.id;
    console.log("id", id);
    auth.deleteUser(id, (err, rows) => {
      if (!err) {
        res.status(200).send("Delete success");
      } else {
        res.status(400).json({ error: "error" });
      }
    });
  }

  updateProfile(req, res) {
    const id = req.params.id;
    auth.updateProfile({ id, data: req.body }, (err, rows) => {
      if (!err) {
        auth.getProfile(id, (err, rows) => {
          if (!err) {
            res.status(200).send(rows[0]);
          } else {
            res.status(400).json({ error: "error" });
          }
        });
      } else {
        res.status(400).json({ error: "error" });
      }
    });
  }

  updatePassword(req, res) {
    const id = req.params.id;
    auth.updatePassword({ id, data: req.body.password }, (err, rows) => {
      if (!err) {
        res.status(200).send("Success");
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
