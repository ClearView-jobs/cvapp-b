const 
  admin = require('firebase-admin'),
  serviceAccount = require('./config/DanielPersonServiceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore(); 

module.exports = db;