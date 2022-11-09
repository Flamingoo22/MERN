const Status = require('../models/model.Status')

// different methods

module.exports = {

    //Read All
    findAll: (req, res) => {
        Status.find()
            .then(allStatus => {
                res.json(allStatus)
            })
            .catch(err => res.json(err))
        },
    
    // CREATE
    create: ( req, res ) =>{
        Status.create(req.body)
            .then( newStatus => {
                res.json(newStatus)
            })
            .catch(err => res.json(err))
    },

    //READ ONE
    findOne: ( req, res ) =>{
        // Status.findOne({_id: req.params.id})
        Status.findById( req.params.id )
            .then(oneStatus => res.json(oneStatus))
            .catch(err => res.json(err))
    },

    //UPDATE
    update: (req, res) => {
        console.log('UPDATE ID:', req.params.id)
        console.log('req.body:', req.body)
        Status.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
            )
            .then(oneStatus => res.json(oneStatus))
            .catch(err => res.json(err))
    },

    //DELETE
    delete: ( req, res ) => {
        // Status.deleteOne({_id:req.params.id})
        Status.findByIdAndDelete( req.params.id )
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }
}