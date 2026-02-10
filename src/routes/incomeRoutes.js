const express = require("express");
const router = express.Router();
const incomecontroller = require("../controllers/incomeController.js");

//  Income Routes
router.get("/", incomecontroller.getIncome);
router.post("/", incomecontroller.postIncome);
router.put("/:id", incomecontroller.putIncome);
router.delete("/:id", incomecontroller.deleteIncome);

module.exports = router;