//Router
const { Router } = require('express'); 
const router = new Router();

//Database
const { db } = require('./../db') 

//Routes
router.get('/', (req,res) => {
    let items = db.get('menu').value();
    console.log(items);
    res.send({ products: items}) 
})
module.exports = router