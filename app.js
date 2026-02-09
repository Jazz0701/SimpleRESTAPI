const express = require("express");
const app = express();
app.use(express.json());
const userroutes = require("./src/routes/userRoutes.js");
const incomeroutes = require("./src/routes/incomeRoutes.js");
const expenseroutes = require("./src/routes/expenseRoutes.js");

// app.get("/", (req, res) => {
//   res.json({
//     message: "Simple REST API using Node.js, Express, and Firebase Realtime Database",
//     endpoints: {
//       users: {
//         get: "/users",
//         post: "/users",
//         put: "/users/:id",
//         delete: "/users/:id"
//       },
//       expenses: {
//         get: "/expenses",
//         post: "/expenses",
//         put: "/expenses/:id",
//         delete: "/expenses/:id"
//       },
//       income: {
//         get: "/income",
//         post: "/income",
//         put: "/income/:id",
//         delete: "/income/:id"
//       }
//     }
//   });
// });

app.use(express.static("public")); // Serve static files from the "public" directory
app.use("/users", userroutes); 
app.use("/income", incomeroutes);
app.use("/expenses", expenseroutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));