const express = require('express');
//const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const index = require('./routes/index');
const item = require('./routes/item');
const question = require('./routes/question');
const user = require('./routes/user');

//app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());

app.use('/', index);
app.use('/item', item);
app.use('/question', question);
app.use('/user', user);

const port = 3030;

app.listen(port, () => console.log(`server started on ${port}`));