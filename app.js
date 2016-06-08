
var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/imports';

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
    console.log("Connected correctly to server.");
      db.close();
});

var bodyParser = require('body-parser');

// Set port
var port = process.env.PORT || 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

app.set('views', '.');

app.use(express.static('js'));

app.get('*', function(req, res) {
    res.sendfile('./exampleindex.html');
});

// routes
var routes = require('./routes')(app);

// Start app at http://localhost:3000
app.listen(port, function() {
    console.log("BasisPath hosted by Express on port " + port + " !");
})
