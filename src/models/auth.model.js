const db = require("../config/db");

class Auth {
  login(data, callback) {
    console.log("data", data);
    db.query(
      `Select * from account WHERE Account = '${data?.account}' AND Password =  '${data?.password}'`,
      (err, rows) => {
        callback(err, rows);
      }
    );
  }
}

module.exports = new Auth();
