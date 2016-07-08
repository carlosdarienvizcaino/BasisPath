
// public/js/node-services/GatewayAPI.js

var uuid = require('uuid');
var routes = require('./routes');

// Async Request
function handlePOSTRequest(req,res){
    console.log("Request received by Gateway");
    console.log(req.body);
    
    var id = uuid.v1();
    // Check for req body code-type
    if (req.body.codeType && req.body.codeType === "java"){ 
        res.status(201).send(id);
        
        // POST to parser API
        routes.postToJavaParser({
            batchId: id,
            sourceCode: req.body.sourceCode
        });        
    }
    else    
        res.status(406).send({Message: "Only Java is currently suported"});
}

// Sync Request
function handleGETRequest(req,res){
   console.log("GET Request received by Gateway");
   routes.GETCodeExecutionGraph(req,res);
}

module.exports = {
   handlePOSTRequest : handlePOSTRequest,
   handleGETRequest  : handleGETRequest
}
