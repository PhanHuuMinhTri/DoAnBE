const db = require("../config/db");

class SV {
  getAllData(callback) {
    db.query("Select * from hocsinh", (err, rows, fields) => {
      if (err) throw err;
      callback(err, rows);
    });
  }
}

module.exports = new SV();
