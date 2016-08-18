
// public/js/node-services/GatewayAPI.js

var uuid = require('uuid');
var routes = require('./routes');

function handlePOSTRequest(req,res){
    console.log("POST Request received by Gateway");
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


function handleGETRequest(req,res){
    console.log("GET Request was received by Gateway");

    var id = req.body.id;
    var response = routes.GETCodeExecutionGraph(id);
    
    if (response.status === "Incompleted"){
        res.send(204).send(response.status);
    }
    else 
        res.send(200).send(response.data);
}

module.exports = {
   handleRequest : handleRequest
}
