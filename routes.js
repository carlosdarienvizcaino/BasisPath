
// routes.js

// require
var javaParser  = require("./public/js/node-services/JavaParser");
var ast         = require('./public/js/node-services/AST');
var controlFlow = require('./public/js/node-services/CF');

module.exports  = function(app){
    
    // Return main index file 
    
    app.get('/app', function(req,res){
        console.log("App Started");
        res.sendfile('./public/views/exampleindex.html');
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