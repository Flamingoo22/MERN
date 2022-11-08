const express = require('express');
const cors = require('cors'); //cross orisis resource sharing
const app = express();
const port = 8000;
require('./server/config/mongoose.config')

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true}));
require('./server/routes/product.routes')(app);

app.listen(port, ()=>console.log(`Listening on port: ${port}`));