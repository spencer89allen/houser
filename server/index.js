var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');

require('dotenv').config({path: __dirname + '/.env'});


var ctrl = require('./controller');

var app = express();

massive( process.env.CONNECTION_STRING, { scripts: __dirname + '/db' }).then( dbInstance => {
    app.set( 'db', dbInstance)
    console.log(`The database is connected`)
}).catch( e => {
    console.log(process.env.CONNECTION_STRING)
    console.error(e);
});

app.use(bodyParser.json());

//Endpoints
app.get('/api/getHouse', ctrl.getHouse)
app.post('/api/addHouse', ctrl.addHouse)
app.delete('/api/deleteHouse/:id', ctrl.deleteHouse)


var port = 4545;
app.listen(port, () => {
    console.log(`The server is listening on port ${port}`)
})