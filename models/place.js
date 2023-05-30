const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    about:  { type: String, required: true },
    state:{type:String, required:true},
    country:{type:String, required:true},
    category:{type:String, required:true},
    Like:{type:Boolean},
   image:{type:String}
   
},{timestamps:true});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
