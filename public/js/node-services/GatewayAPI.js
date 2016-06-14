
// public/js/node-services/GatewayAPI.js

var uuid = require('uuid');

function handleRequest(req,res){
   
    var id = uuid.v1();
       
    // Check for req body code-type
    res.status(201).send(id);
    console.log("Hello");
}

module.exports = {
    
   handleRequest : handleRequest
}
