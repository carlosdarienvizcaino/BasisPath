
var graphHttpClient = require('./graphHttpClient');

function handleGETRequest(req,res){
   console.log("GET Request received by Gateway");
   graphHttpClient.GETGraphById(req,res);
}

module.exports = {
    handleGETRequest : handleGETRequest
} 
