const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true, '{PATH} must be present'],
        minlength: [3, '{PATH} must be at least 3 characters long.']
    }
}, {timestamps: true})

const Author = mongoose.model('Author', AuthorSchema);
module.exports = Author;