const mongoose = require('mongoose');

module.exports = (DB)=>{
    mongoose.connect('mongodb://localhost/' + DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('Database connection established'))
        .catch(err=>console.log('There was an err', err))
}