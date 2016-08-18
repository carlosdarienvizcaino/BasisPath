var uuid = require('uuid');
var javaParserHttpClient = require('./JavaParserHttpClient');

// Async Request
function handlePOSTRequest(req,res){
    console.log("Request received by Gateway");
    var id = uuid.v1();
    
    // Check for req body code-type
    if (req.body.codeType && req.body.codeType === "Java"){ 
        res.status(201).send(id);
        
        javaParserHttpClient.POST({
            batchId: id,
            sourceCode: req.body.sourceCode
        });        
    }
    else    
        res.status(406).send({Message: "Only Java is currently suported"});
}

module.exports = {
    handlePOSTRequest : handlePOSTRequest
}