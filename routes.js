
// routes.js

// require
var gatewayAPI = require("./public/js/node-services/GatewayAPI");

module.exports = function(app){
    
    // Return main index file 
    app.get('*', function(req,res){
        res.sendfile('./public/views/exampleindex.html');
    });
    
    // Gateway API handles any incoming request 
    app.post('/api/basispath', function(req, res){
        gatewayAPI.handleRequest(req,res);
    });

}