const PersonController = require('../controllers/person.controller');

module.exports = function(app){
    app.get('/api',PersonController.index)
    app.get('/api/person', PersonController.showPeople)
    app.post('/api/person', PersonController.createPerson)
}