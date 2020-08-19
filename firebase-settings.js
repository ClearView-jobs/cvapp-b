const admin = require("firebase-admin"),
  serviceAccount = require("./config/ServiceAccountKey.json");
require("dotenv").config();

admin.initializeApp({
  credential: admin.credential.cert({
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  }),
});

const db = admin.firestore();

module.exports = db;
