var express = require('express');
var app = express();

var bodyParser = require('body-parser');

// Set port
var port = process.env.PORT || 3006;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

app.use(express.static('js'));

// routes
var routes = require('./routes')(app);

// Start Gateway Service at http://localhost:3006
app.listen(port, function() {
    console.log("Java Parser is hosted on port " + port + " !");
})
 
 
