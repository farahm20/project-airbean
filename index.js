const express = require('express');
const cors = require('cors');
 
const app = express();
app.use(express.json())
app.use(cors());

//Routes
const productsRoute = require('./routes/products');
const orderRoute = require('./routes/orders');

app.use('/products', productsRoute)

app.use('/orders', orderRoute)

//app.use('/assets', express.static('./assets'))

const PORT = 5000;

app.listen(PORT, () => {
    console.log('Server is up and running!')
})