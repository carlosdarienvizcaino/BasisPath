
var express = require('express');

var app = express();

app.set('views', '.');
app.set('view engine', 'jade');
app.use(express.static('js'));

app.get('/', function(req, res) {
    res.render('basispath');
});

app.listen(3000, function() {
    console.log("BasisPath hosted by Express on port 3000!");
})