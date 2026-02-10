var admin = require("firebase-admin");
dotenv = require("dotenv").config();

admin.initializeApp({
  credential: admin.credential.cert({
    type: process.env.type,
    project_id: process.env.project_id,
    private_key_id: process.env.private_key_id,
    private_key: process.env.private_key.replace(/\\n/g, "\n"),
    client_email: process.env.client_email,
    client_id: process.env.client_id,
    auth_uri: process.env.auth_uri,
    token_uri: process.env.token_uri,
    auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
    client_x509_cert_url: process.env.client_x509_cert_url,
    universe_domain: process.env.universe_domain
  }),

  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

var serviceAccount = require("./simple-restapi-32f83-firebase-adminsdk.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://simple-restapi-32f83-default-rtdb.firebaseio.com"
// });

const db = admin.database();
module.exports = db;



















































