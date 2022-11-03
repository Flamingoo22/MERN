const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, 'Setup is required'],
        minlength: [3, 'Setup must be more than 3 characters']
    },
    punchline: {
        type: String,
        required: [true, 'PunchLine is required'],
        minlength: [10, 'Punchline must be more than 10 characters']
    }
});

const Joke = mongoose.model('Joke', JokeSchema)
module.exports = Joke;