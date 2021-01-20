const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const apparelSchema = new Schema({
    username: {type: String, required: true},
    id: {type: Number, required: true},
    description: {type: String, required: true},
    colors: {type: String, required: true},
    sizes: {type: String, required: true},
    price: {type: Number, required: true},
    count: {type: Number, required: true}

    
},{
    timestamps: true
}) 

const Apparel = mongoose.model('Apparel', apparelSchema);
module.exports = Apparel;