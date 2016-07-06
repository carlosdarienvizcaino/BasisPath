
// public/js/node-services/GatewayAPI.js

var uuid = require('uuid');
var routes = require('./routes');

function handleRequest(req,res){
   
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

module.exports = {
   handleRequest : handleRequest
}
