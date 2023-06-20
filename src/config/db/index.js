async function connect() {}

const mysql = require("mysql");

// Kết nối đến MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pbl7",
});

// Kết nối đến MySQL
connection.connect(function (err) {
  if (err) {
    console.error("Lỗi kết nối đến MySQL: " + err.stack);
    return;
  }

  console.log("Kết nối đến MySQL thành công với ID " + connection.threadId);
});

module.exports = connection;
