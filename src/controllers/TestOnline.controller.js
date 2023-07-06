const testOnline = require("../models/test-online");
const historyTest = require("../models/history-test.model");

class TestOnlineController {
  getListTestOnline(req, res) {
    try {
      testOnline.getListTestOnline((err, rows) => {
        if (!err) {
          res.status(200).send(rows);
        } else {
          res.status(500).json({ error: "error when get test online from db" });
        }
      });
    } catch (error) {}
  }

  getTestOnline(req, res) {
    const id = req.params.id;
    try {
      testOnline.getTestOnline(id, (err, rows) => {
        if (!err) {
          res.status(200).send(rows);
        } else {
          res.status(500).json({ error: "error when get test online from db" });
        }
      });
    } catch (error) {}
  }

  getRankTestOnline(req, res) {
    const testId = req.params.testId;
    try {
      historyTest.getRankTest(testId, (err, rows) => {
        if (!err) {
          res.status(200).send(rows);
        } else {
          res
            .status(500)
            .json({ error: "error when get history-test online from db" });
        }
      });
    } catch (error) {}
  }

  getListTestOnlineByUser(req, res) {
    const userId = req.params.userId;

    try {
      testOnline.getListTestOnlineByUser(userId, (err, rows) => {
        if (!err) {
          res.status(200).send(rows);
        } else {
          res.status(500).json({ error: "error when test online from db" });
        }
      });
    } catch (error) {}
  }

  addTestOnline(req, res) {
    const data = req.body;
    try {
      testOnline.addTestOnline(data, (err, rows) => {
        if (!err) {
          res.status(200).send("Add test online success");
        } else {
          res.status(500).json({ error: "error when set test online from db" });
        }
      });
    } catch (error) {}
  }

  updateTestOnline(req, res) {
    const data = req.body;
    try {
      testOnline.updateTestOnline(data, (err, rows) => {
        if (!err) {
          res.status(200).send("Update test online success");
        } else {
          res.status(500).json({ error: "error when set test online from db" });
        }
      });
    } catch (error) {}
  }

  deleteTestOnline(req, res) {
    const id = req.params.id;
    try {
      testOnline.deleteTestOnline(id, (err, rows) => {
        if (!err) {
          res.status(200).send("Delete test success");
        } else {
          res.status(500).json({ error: "error when delete test from db" });
        }
      });
    } catch (error) {}
  }
}

module.exports = new TestOnlineController();
