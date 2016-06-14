
// public/js/node-services/GatewayAPI.js

var uuid = require('uuid');
var routes = require('./routes');

function handleRequest(req,res){
   
    var id = uuid.v1();
    // Check for req body code-type
    res.status(201).send(id);
    console.log(req.body);
    // POST to parser API
    routes.postToJavaParser();
    res.status(201).send(id);
}

module.exports = {
    
   handleRequest : handleRequest
}
