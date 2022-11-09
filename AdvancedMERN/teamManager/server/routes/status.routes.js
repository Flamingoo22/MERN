const Status = require('../controllers/statusControllers')

module.exports = (app) => {
    app.get('/api/status', Status.findAll )
    app.post('/api/status', Status.create )
    app.get('/api/status/:id', Status.findOne )
    app.put('/api/status/:id', Status.update)
    app.delete('/app/status/:id', Status.delete)
}