// == CRUD ==
//import the model to make queries to the DB
const Player = require('../models/model.players')

// different methods

module.exports = {

    //Read All
    findAll: (req, res) => {
        Player.find()
            .then(allPlayers => {
                res.json(allPlayers)
            })
            .catch(err => res.json(err))
        },
    
    // CREATE
    create: ( req, res ) =>{
        Player.create(req.body)
            .then( newPlayer => {
                res.json(newPlayer)
            })
            .catch(err => res.json(err))
    },

    //READ ONE
    findOne: ( req, res ) =>{
        // Player.findOne({_id: req.params.id})
        Player.findById( req.params.id )
            .then(onePlayer => res.json(onePlayer))
            .catch(err => res.json(err))
    },

    //UPDATE
    update: (req, res) => {
        console.log('UPDATE ID:', req.params.id)
        console.log('req.body:', req.body)
        Player.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
            )
            .then(onePlayer => res.json(onePlayer))
            .catch(err => res.json(err))
    },

    //DELETE
    delete: ( req, res ) => {
        // Player.deleteOne({_id:req.params.id})
        Player.findByIdAndDelete( req.params.id )
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }
}