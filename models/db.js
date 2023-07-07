const mongoose = require('mongoose');
//const product = require('../routes/produit')

mongoose.connect('mongodb://0.0.0.0:27017/ProduitDB', {useNewUrlParser: true}, (err) => {
    if(!err){ console.log('MongoDB Connexion succeded')}
    else{ console.log('Erreur in DB Connexion', err)}
});
