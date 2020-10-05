const { nanoid } = require('nanoid');


const { v4: uuidv4 } = require('uuid');

//Router
const { Router } = require('express');
const router = new Router();

//Database
const { db } = require('./../db')

//Routes
router.post('/', (req, res) => {
    console.log("router post" + req.body)
    //calculating ETA from math random using mix and max minutes
    let min = 5;
    let max = 35;
    let ETA = Math.floor(Math.random() * ((max - min) + 1) + min);


    let order = {
        orderNr: nanoid(10),
        timeStamp: ETA,
        item: req.body.items,
        totalOrderValue: req.body.items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    }

    db.get('orders').push(order).write()
    console.log(`Order ${order.orderNr} stored in db.`)
    console.log(`Order ${order.timeStamp} stored in db.`)
   
    res.send({ msg: 'Din beställning är på väg!', 
    orderNr: '#' + order.orderNr,
    timeStamp: order.timeStamp
 })

})

module.exports = router