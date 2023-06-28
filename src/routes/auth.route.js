const express = require("express");
const router = express.Router();
const authController = require("../controllers/Auth.controller");

router.post("/login", authController.login);
router.post("/register", authController.register);
router.get("/user", authController.getUser);
router.delete("/delete/:id", authController.deleteUser);
router.get("/profile/:id", authController.getProfile);
router.post("/profile/setting/:id", authController.updateProfile);
router.post("/password/:id", authController.updatePassword);
module.exports = router;
