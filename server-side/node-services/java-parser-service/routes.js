
// routes.js

var javaParserHttpHandler = require('./JavaParserHttpHandler');

module.exports  = function(app){
   
    app.post('/api/javaparser', function(req,res){
        javaParserHttpHandler.handlePOSTRequest(req,res);            
    });
}