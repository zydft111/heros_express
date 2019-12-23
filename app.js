const express = require('express');
// const ejs = require('ejs')
const app = express();
const router = require('./router');
const bodyParser = require('body-parser')


app.set('view engine','ejs');

app.listen(3000);

app.use('/node_modules',express.static("node_modules"));
app.use(bodyParser.urlencoded({extended: false}))

app.use(router);



