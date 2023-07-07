require('./models/db');

const express = require("express");
const app = express()
const port = 3000;
const produitController = require('./controllers/produitController')
//const produit = require('./routes/produit')
//const hostname = "localhost";

app.listen(port, () => {
    console.log('express server started at port : ' + port)
})
