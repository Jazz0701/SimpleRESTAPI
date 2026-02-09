const express = require("express");
const app = express();
app.use(express.json());
const userroutes = require("./src/routes/userRoutes.js");
const incomeroutes = require("./src/routes/incomeRoutes.js");
const expenseroutes = require("./src/routes/expenseRoutes.js");


app.use(express.static("public")); // Serve static files from the "public" directory
app.use("/users", userroutes); 
app.use("/income", incomeroutes);
app.use("/expenses", expenseroutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));