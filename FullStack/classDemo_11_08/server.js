const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const DB = 'note';


require('./server/config/mongoose.config')(DB)

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true}));

//connect routes 
require('./server/routes/notes.routes')(app)

app.listen(port, ()=>console.log(`Listening on port: ${port}`));