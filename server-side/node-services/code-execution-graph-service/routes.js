
// routes.js
var graphHttpHandler = require('./graphHttpHandler');

module.exports  = function(app){
    
   app.post('/api/cf', function(req,res){
       graphHttpHandler.handlePOSTRequest(req,res);
   });
   
   app.get('/api/cf/:id', function(req,res){
       graphHttpHandler.handleGETRequest(req,res);
   });
}