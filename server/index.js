const express = require('express');
const parser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');
const connection = require('../database/models.js');
const router = require('./router.js');

const app = express();
const port = 3000;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/api', router);


app.listen(port, () => console.log(`ASK/INFO server is up and running at port: ${port}`));