const mongoose = require('mongoose')

const StatusSchema = new mongoose.Schema({
    isPlaying: Boolean,
});

const Status = mongoose.model('Status', StatusSchema);
module.exports = Status;