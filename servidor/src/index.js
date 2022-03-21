const express = require('express');
const app = express();
const um = require('./exemplo1');
const dois = require('./exemplo2')
require("dotenv").config();
app.listen(process.env.PORT);
app.use('/um', um);
app.use('/dois', dois);
