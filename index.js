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

// POST method route
app.get('/test', function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });
var counter = Math.floor((Math.random() * 10) + 1);
setInterval(function () {
    res.write("data: This is a message at time \n\n")
},2000)

})

app.get('/toto', function (req, res) {
    var counter = Math.floor((Math.random() * 10) + 1);
    while (1){
        res.json({'test':"tes"})
        counter--;
        if (!counter) {
            res.json({'test':"tes"})
            counter = Math.floor((Math.random() * 10) + 1);
        }
        var seconds = 1
        var waitTill = new Date(new Date().getTime() + seconds * 1000);
        while(waitTill > new Date()){}
    }

})
function function2() {
    // all the stuff you want to happen after that pause
    console.log('Blah blah blah blah extra-blah');
}
app.use('/scripts', express.static(momentFile));

app.use('/', express.static(public));
console.log(momentFile)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//node_modules/moment/min/moment.min.js