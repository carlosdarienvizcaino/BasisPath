
// routes.js

// require
var gatewayAPI  = require("./public/js/node-services/gateway-api-service/GatewayAPI");
var javaParser  = require("./public/js/node-services/JavaParser");
var ast         = require('./public/js/node-services/AST');
var controlFlow = require('./public/js/node-services/CF');

module.exports  = function(app){
    
    // Return main index file 
    
    app.get('/app', function(req,res){
        console.log("App Started");
        res.sendfile('./public/views/exampleindex.html');
    });
    
    
    // Gateway API handles any incoming request 
    app.post('/api/basispath', function(req, res){
        gatewayAPI.handlePOSTRequest(req,res);
    });
    
    app.get('/api/basispath', function(req,res){
        gatewayAPI.handleGETRequest(req,res);
    });
    
    // Java Parser API
    app.post('/api/javaparser', function(req,res){
        javaParser.handleRequest(req,res);            
    });
    
    // Abstract Syntax Tree Creator
    app.post('/api/ast', function(req,res){
       ast.handleRequest(req,res);
    });
    
   // Control Flow Tree Creator
   app.post('/api/cf', function(req,res){
       controlFlow.handlePOSTRequest(req,res);
   });
   
   app.get('/api/cf/:id', function(req,res){
       controlFlow.handleGETRequest(req,res);
   });
}