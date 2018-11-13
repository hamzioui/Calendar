const express = require('express')
const app = express()
const moment = require('moment');

const port = 3000
var path = require('path');
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
var public = path.join(__dirname, 'public');
var momentFile = path.join(__dirname, 'node_modules');
app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'index.html'));
});
app.get('/test', function (req, res) {
    res.send('GET request to the homepage')
})

// POST method route
app.post('/test', function (req, res) {

    res.json({status:true})
})
app.use('/scripts', express.static(momentFile));

app.use('/', express.static(public));
console.log(momentFile)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//node_modules/moment/min/moment.min.js