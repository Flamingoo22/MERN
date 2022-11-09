const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
require('./server/config/mongoose.config')

require('./server/routes/players.routes')(app)
require('./server/routes/status.routes')(app)

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true}));


app.listen(port, ()=>console.log(`Listening on port: ${port}`));