const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/usersController.js");

router.get("/", usercontroller.getUsers);
router.post("/", usercontroller.postUser);
router.put("/:id", usercontroller.putUser);
router.delete("/:id", usercontroller.deleteUser);

module.exports = router;

