
// routes.js

var astHttpHandler = require('./astHttpHandler');

module.exports  = function(app){

    app.post('/api/ast', function(req,res){
       astHttpHandler.handlePOSTRequest(req,res);
    });
}