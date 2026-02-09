var admin = require("firebase-admin");

var serviceAccount = require("./simple-restapi-32f83-firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://simple-restapi-32f83-default-rtdb.firebaseio.com"
});

const db = admin.database();
module.exports = db;


















































// //   import { initializeApp } from "firebase/app";
// //   import { getDatabase } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js";
//   require("dotenv").config();
  

  

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // const firebaseConfig = {
// //   apiKey: "AIzaSyBuo-RuCDQOlJtfbKU4nM3rmty27HsOUu4",
// //   authDomain: "simple-restapi-32f83.firebaseapp.com",
// //   databaseURL: "https://simple-restapi-32f83-default-rtdb.firebaseio.com",
// //   projectId: "simple-restapi-32f83",
// //   storageBucket: "simple-restapi-32f83.firebasestorage.app",
// //   messagingSenderId: "364619942130",
// //   appId: "1:364619942130:web:d92d3fa6f70182eed4686b",
// //   measurementId: "G-FQ5MR3QP1D"
// // };

// //  const app = initializeApp(firebaseConfig);
// //  const db = getDatabase(app);

// /* Initialize Firebase Admin SDK */
// var admin = require("firebase-admin");

// var serviceAccount = require("./simple-restapi.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://simple-restapi-32f83-default-rtdb.firebaseio.com"
// });

