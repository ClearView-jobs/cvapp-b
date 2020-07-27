const 
  admin = require('firebase-admin'),
  serviceAccount = require('./Keys/ServiceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore(); 

module.exports.db = db;