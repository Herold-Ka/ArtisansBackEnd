const mongoose = require('mongoose')

const produitSchema = mongoose.Schema({
    id:{
        type: Number,
        required: true,
    },
    name:{
        type: String
    },
    type:{
        type: String
    },
    price:{
        type: Number
    },
    warranty_years:{
        type: Number
    },
    available:{
        type: Boolean
    },
},{
    timestamps: true,
    underscored: true,
}

);

mongoose.model('produit', produitSchema)