const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let products = [
    {
        id: 1,
        name: "HP",
        description: "Computer",
        price: 500
    },

    {
        id: 2,
        name: "Mercedes",
        description: "car",
        price: 55000
    }
];

app.get('/', (req, res, next) => {
    res.render('products', {products: products});
});

app.listen(3000);