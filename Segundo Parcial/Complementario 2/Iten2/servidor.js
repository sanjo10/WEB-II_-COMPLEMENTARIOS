const express = require('express');
const cors = require('cors');
const app = express();
const {PORT} = require('./config/index')

require('./src/database/database')

app.use(cors()).use(express.json());

app.set('view engine', 'ejs');


app.use('/', require('./src/routes/index'));


app.listen(PORT, ()=> console.log(`Listen port ${PORT} `));

