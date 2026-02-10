const express = require("express");
const router = express.Router();
const expensecontroller = require("../controllers/expenseController.js");

//  Expense Routes
router.get("/", expensecontroller.getExpense);
router.post("/", expensecontroller.postExpense);
router.put("/:id", expensecontroller.putExpense);
router.delete("/:id", expensecontroller.deleteExpense);

module.exports = router;