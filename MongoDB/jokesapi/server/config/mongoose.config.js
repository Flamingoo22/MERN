const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokes')
    .then(()=>console.log('Established a connection to database'))
    .catch((err)=>console.log('something went wrong when connection to the database', err))