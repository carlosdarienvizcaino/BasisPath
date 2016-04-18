
var express = require('express');
var bodyParser = require('body-parser');

var Parser  = require('./js/parser')
var app = express();

app.set('views', '.');
app.use(express.static('js'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('*', function(req, res) {
    res.sendfile('./exampleindex.html');
});

app.post('/ast', function(req,res){
   
   var parser = new Parser(req.body.data);
   console.log(parser.getGraphs() );
   res.send(parser.getGraphs());  
});

app.listen(3000, function() {
    console.log("BasisPath hosted by Express on port 3000!");
})
