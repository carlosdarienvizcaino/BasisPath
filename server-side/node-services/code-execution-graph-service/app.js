var express = require('express');
var app = express();

var bodyParser = require('body-parser');

// Set port
var port = process.env.PORT || 3004;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

app.use(express.static('js'));

// routes
var routes = require('./routes')(app);

// Start Gateway Service at http://localhost:3004
app.listen(port, function() {
    console.log("Code Execution Graph is hosted on port " + port + " !");
})
