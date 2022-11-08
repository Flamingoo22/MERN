const { Person } = require('../models/person.model');


module.exports.index = ( req, res ) => {
    res.json({
        message: 'hello world'
    })
}

module.exports.showPeople = (req, res ) =>{
    Person.find()
        .then(people => res.json(people))
        .catch(err => res.json(err))
}


module.exports.createPerson = ( req, res ) =>{
    // const { firstName, lastName } = req.body;
    // console.log(req.body)
    // Person.create({
    //     firstName,
    //     lastName
    // })
    const person = new Person(req.body)
    console.log(req)
    person.save()
        .then(person => {
            console.log(person)
            // res.json(req)
            res.json(person)
        })
        .catch(err=>res.json(err))
}