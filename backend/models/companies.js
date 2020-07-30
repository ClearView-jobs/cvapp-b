const db = require('../firebase-settings');

exports.create = async function(company){
    try{
        let companyInfo = {
            name: company.name,
            address: company.address,
            tags: company.tags,
            categories: company.categories,
            rating: 0, 
            number_of_employees: company.number_of_employees
        }
        const doc = await db.collection('companies').add(companyInfo);
        const snapshot = await doc.get();
        return {
            name: snapshot.data().name,
            id: snapshot.id
        }
    }catch(error){
        console.log(error);
    }
}

exports.get = async function(){
    try {
        let companies = [];
        const snapshot = await db.collection('companies').get();
        snapshot.docs.forEach(company=>{
            companies.push({id: company.id, ...company.data()});
        })
        return companies;
    } catch (error) {
        console.log(error);
    }
}   

exports.getCompany = async function(companiID){
    try{
        let company = await db.collection('companies').doc(companiID).get();
        return {
            id: company.id,
            ...company.data()};
    }catch(error){
        console.log(error);
    }
}