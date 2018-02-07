const express = require('express');
//const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./config/db');

const app = express();

const index = require('./routes/index');
const commodity = require('./routes/commodity');
const question = require('./routes/question');
const user = require('./routes/user');

//app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());

app.use('/', index);
app.use('/commodity', commodity);
app.use('/question', question);
app.use('/user', user);

const port = 3030;

app.listen(port, () => console.log(`server started on ${port}`));