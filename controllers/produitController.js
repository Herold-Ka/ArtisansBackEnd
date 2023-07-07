//const modelProduit = require('../models/produit.model')
const express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
    res.json('sample text')
})

module.exports = router;

/*exports.newProduct = async (req, res) => {
    console.log('bibi')
    /*const product = await modelProduit.findOne({
        id: req.body.id,
        name: req.body.name,
    })
    console.log('Yvianne')
    if(!product){
        const newProduct = new modelProduit({
            id: req.body.id,
            name: req.body.name,
            type: req.body.type,
            price:  req.body.price,
            warranty_years: req.body.warranty_years,
            available: req.body.available,
        })
        .then(product => {
            res.status(200).json({product: product})
        })
        .catch(err =>{
            res.status(502).json(err);
        })
    }else{
        res.json("le produit existe déjà")
    }
}*/