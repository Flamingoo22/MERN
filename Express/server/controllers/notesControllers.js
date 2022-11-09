// == CRUD ==
//import the model to make queries to the DB
const Note = require('../models/model.notes')

// different methods

module.exports = {

    //Read All
    findAll: (req, res) => {
        Note.find()
            .then(allNotes => {
                res.json(allNotes)
            })
            .catch(err => res.json(err))
        },
    
    // CREATE
    create: ( req, res ) =>{
        Note.create(req.body)
            .then( newNote => {
                res.json(newNote)
            })
            .catch(err => res.json(err))
    },

    //READ ONE
    findOne: ( req, res ) =>{
        // Note.findOne({_id: req.params.id})
        Note.findById( req.params.id )
            .then(oneNote => res.json(oneNote))
            .catch(err => res.json(err))
    },

    //UPDATE
    update: (req, res) => {
        console.log('UPDATE ID:', req.params.id)
        console.log('req.body:', req.body)
        Note.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
            )
            .then(oneNote => res.json(oneNote))
            .catch(err => res.json(err))
    },

    //DELETE
    delete: ( req, res ) => {
        // Note.deleteOne({_id:req.params.id})
        Note.findByIdAndDelete( req.params.id )
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }
}