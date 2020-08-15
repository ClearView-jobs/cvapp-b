const 
  admin = require('firebase-admin'),
  serviceAccount = require('./config/ServiceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore(); 

module.exports = db;