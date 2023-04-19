const db = require("../config/db");

const modelSV = {
  getAllData: (callback) => {
    db.query("Select * from hocsinh", (err, rows, fields) => {
      if (err) throw err;
      callback(rows);
    });
  },
};

module.exports = modelSV;
