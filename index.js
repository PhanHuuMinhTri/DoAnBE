const express = require("express");
const morgan = require("morgan");

const bodyParser = require("body-parser");
const app = express();
const port = 8080;
const cors = require("cors");
const route = require("./src/routes");

// app.use(express.urlencoded());
// app.use(morgan("combined"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(
//   cors({
//     credentials: true,
//     origin: ["http://localhost:3001", "http://localhost:3002"],
//   })
// );

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
