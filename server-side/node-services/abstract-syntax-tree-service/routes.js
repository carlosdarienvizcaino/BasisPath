
// routes.js

var ASTHttpHandler = require('./ASTHttpHandler');

module.exports  = function(app){

    app.post('/api/ast', function(req,res){
       ASTHttpHandler.handlePOSTRequest(req,res);
    });
}