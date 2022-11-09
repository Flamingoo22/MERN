const Note = require('../controllers/notesControllers')

module.exports = (app) => {
    app.get('/api/notes', Note.findAll )
    app.post('/api/notes', Note.create )
    app.get('/api/notes/:id', Note.findOne )
    app.put('/api/notes/:id', Note.update)
    app.delete('/app/notes/:id', Note.delete)
}