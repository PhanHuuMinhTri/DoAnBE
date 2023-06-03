async function connect() {}

const mysql = require("mysql");

// Kết nối đến MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "datn",
});

// Kết nối đến MySQL
connection.connect(function (err) {
  if (err) {
    console.error("Lỗi kết nối đến MySQL: " + err.stack);
    return;
  }

  console.log("Kết nối đến MySQL thành công với ID " + connection.threadId);
});

// // Thực hiện truy vấn
// connection.query("SELECT * FROM ten_bang", function (err, rows, fields) {
//   if (err) throw err;

//   console.log("Dữ liệu từ MySQL: ", rows);
// });

// // Đóng kết nối MySQL khi đã xử lý xong
// connection.end();

module.exports = connection;
