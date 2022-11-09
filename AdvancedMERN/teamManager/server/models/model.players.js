//import mongoose to build a model
const mongoose = require('mongoose')

//the schema - the rules the entries in the DB must be follow
const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, '{PATH} must be present'],
        minlength: [3, '{Path} MUST BE AT LEAST 3 CHARS LONG']
    },
    position: {
        type: String,
        required: [true, '{PATH} must be present'],
    },
    isPlaying: {
        type: Boolean
    }
    
}, {timestamps: true})  //created at and updated at

// create the schema and export it 
const Player = mongoose.model('Players', PlayerSchema)
module.exports = Player