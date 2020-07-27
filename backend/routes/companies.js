const 
  express = require('express'),
  router = express.Router();

const { db } = require('../firebase-settings');


router.get('/', (req, res) => {
    db.collection('companies').get().then((snapshot) => {
        let companies = [];
        snapshot.docs.forEach(company=>{
            companies.push(company.data())
        })
        res.json(companies);
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(500);
    })
})

router.post('/', (req, res) => {
    let company = {
      name: req.body.name,
      number_of_employees: req.body.number_of_employees
    }
    //db.collection('sample').doc('company').add(company).then(() => {
    db.collection('companies').add(company).then(() => {
      console.log("quote was written to database");
      res.sendStatus(201)
    }).catch((err)=>{
      console.log(err);
      res.sendStatus(500);
    })
});
  
module.exports = router;