var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var opiskelijaRouter = require('./routes/opiskelija');
var arviointiRouter = require('./routes/arviointi');
var opintojaksoRouter = require('./routes/opintojakso');

const helmet = require('helmet');
const cors = require('cors');
const basicAuth = require('express-basic-auth'); //autentikointi


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(helmet());
app.use(cors());

//Protect all routes
app.use(basicAuth({
    users: { 'admin': '2022' }
}))

app.use('/opiskelija', opiskelijaRouter);
app.use('/arviointi', arviointiRouter);
app.use('/opintojakso', opintojaksoRouter);


module.exports = app;
