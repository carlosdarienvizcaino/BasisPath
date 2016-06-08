
// public/js/node-services/GatewayAPI.js

function handleRequest(req,res){
    
    // Check for req body code-type
    res.status(201).send("Request was received");
}
module.exports = {
    
   handleRequest : handleRequest
}