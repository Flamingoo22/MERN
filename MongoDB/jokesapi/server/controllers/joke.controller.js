const Joke = require('../models/joke.model');

module.exports.findAllJokes = ( req, res) =>{
    Joke.find()
        .then(allJokes => res.json({jokes: allJokes}))
        .catch(err => res.json({message: 'Something went wrong', error:err}))
}

module.exports.findOneJokes = ( req, res) =>{
    Joke.findOne({_id:req.params.id})
        .then(joke => res.json({jokes: joke}))
        .catch(err => res.json({message: 'Something went wrong', error:err}))
}

module.exports.findRandomJokes = ( req, res) =>{
    Joke.aggregate().sample(1)
        .then(joke => res.json({jokes: joke}))
        .catch(err => res.json({message: 'Something went wrong', error:err}))
}



module.exports.createJoke = ( req, res) =>{
    const joke = new Joke(req.body);
    console.log(req.body)
    joke.save()
        .then(newJoke => res.json({joke: newJoke}))
        .catch(err => res.json({err}));
}

module.exports.updateJoke = ( req, res) =>{
    Joke.findOne({_id:req.params.id})
        .then(joke =>   {
            joke.setup = req.body.setup,
            joke.punchline = req.body.punchline
            return joke.save();
        })
        .then(newJoke => res.json(newJoke))
        .catch(err => res.json({err}))
}
module.exports.deleteJoke = ( req, res) =>{
    Joke.remove({_id:req.params.id})
        .then(deletedJoke => res.json({joke: deletedJoke, message:'Successfully removed'}))
        .catch(err => res.json({message: 'Something went wrong', error:err}))
}
