var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');

require('dotenv').config({path: '../.env'});


var ctrl = require('./controller');

var app = express();

massive( process.env.CONNECTION_STRING).then( dbInstance => {
    app.set( 'db', dbInstance)
    console.log(`The database is connected`)
}).catch( e => {
    console.log(process.env.CONNECTION_STRING)
    console.error(e);
});

app.use(bodyParser.json());


var port = 4545;
app.listen(port, () => {
    console.log(`The server is listening on port ${port}`)
})