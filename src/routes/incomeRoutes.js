const express = require("express");
const router = express.Router();
const incomecontroller = require("../controllers/incomeController.js");

router.get("/", incomecontroller.getIncome);
router.post("/", incomecontroller.postIncome);
router.put("/:id", incomecontroller.putIncome);
router.delete("/:id", incomecontroller.deleteIncome);

module.exports = router;