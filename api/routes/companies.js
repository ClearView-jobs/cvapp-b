const
    express = require('express'),
    router = express.Router(),
    companyModel = require('../../models/companies'),
    db = require('../../firebase-settings');


router.get('/', async (req, res) => {
    try {
        let companies = await companyModel.get();
        res.status(200).json(companies);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

router.get('/:id', async (req, res) => {
    try{
        let companyID = req.params.id;
        let company = await companyModel.getCompany(companyID);
        res
            .status(200)
            .json(company);
    }catch(error){
        res.sendStatus(500);
    }
})

router.post('/', (req, res) => {
    try {
        companyModel.create(req.body);
        res.sendStatus(201)
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

module.exports = router;