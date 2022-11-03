// import express from express
const express = require('express');
// console.log(express)

//invoke express
const app = express();
// console.log(app)
const PORT = 1337;

const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

//ROUTING //api indicate its a server route
app.get('/api', (req, res)=>{
    // req.body will contain the form data from postman or form react
    res.json({
        message:'WAAAA'
    })
})

AudioParam.post('/api/users', (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.json({ status: 'ok' })
})

app.get('/api/users', (req, res)=> {
    res.json(users)
})





//! starts the server
//! Always at the bootom
app.listen(PORT, () => console.log(`>>> SERVER is up and listening for REQuest and RESpond on port ${PORT}`))