// == CRUD ==
//import the model to make queries to the DB
const Author = require('../models/authors')

// different methods

module.exports = {

    //Read All
    findAll: (req, res) => {
        Author.find()
            .then(allAuthors => {
                res.json(allAuthors)
            })
            .catch(err => res.json(err))
        },
    
    // CREATE
    create: ( req, res ) =>{
        console.log(req.body)
        Author.create(req.body)
            .then( newAuthor => {
                res.json(newAuthor)
            })
            .catch(err => res.status(400).json(err))
    },

    //READ ONE
    findOne: ( req, res ) =>{
        // Author.findOne({_id: req.params.id})
        console.log(req.params.id)
        Author.findById( req.params.id )
            .then(oneAuthor => res.json(oneAuthor))
            .catch(err => res.json(err))
    },

    //UPDATE
    update: (req, res) => {
        console.log('UPDATE ID:', req.params.id)
        console.log('req.body:', req.body)
        Author.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
            )
            .then(oneAuthor => res.json(oneAuthor))
            .catch(err => res.status(400).json(err))
    },

    //DELETE
    delete: ( req, res ) => {
        // Author.deleteOne({_id:req.params.id})
        Author.findByIdAndDelete( req.params.id )
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }
}