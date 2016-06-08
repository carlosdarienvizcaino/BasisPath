
// routes.js

// require
var gatewayAPI  = require("./public/js/node-services/GatewayAPI");
var javaParser  = require("./public/js/node-services/JavaParser");
var ast         = require('./public/js/node-services/AST');
var controlFlow = require('./public/js/node-services/CF');

module.exports  = function(app){
    
    // Return main index file 
    app.get('*', function(req,res){
        res.sendfile('./public/views/exampleindex.html');
    });
    
    // Gateway API handles any incoming request 
    app.post('/api/basispath', function(req, res){
        gatewayAPI.handleRequest(req,res);
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
       controlFlow.handleRequest(req,res);
   });
}