
var DB = require("../../db/JavaParserDB");
var ASTHttpClient = require('./ASTHttpClient');

function handlePOSTRequest(req, res){
	console.log("Request was recieved by Parser...");

	DB.save({
        batchId  : req.body.batchId,
        status   : "STARTED"
    });	

    res.status(200).send("Request was recieved by Parser");
    
    ASTHttpClient.POSTListOfTokens({
        batchId : req.body.batchId,
        tokes   : []
    });
}

module.exports = {
    handlePOSTRequest: handlePOSTRequest
}