const express = require('express')
const app = express()
const port = 3000
var path = require('path');
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
var public = path.join(__dirname, 'public');
app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'index.html'));
});
app.get('/test', function (req, res) {
    res.send('GET request to the homepage')
})

// POST method route
app.post('/test', function (req, res) {
    console.log(req.body,'tttt');
    //res.send('POST request to the homepage')
    res.json({status:true})
})
app.use('/', express.static(public));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));