
var DB = require("./JavaParserDB");

function handlePOSTRequest(req, res){
	console.log("Request was recieved by Parser...");

	DB.save({
        batchId  : req.body.batchId,
        status   : "STARTED"
    });	

    res.status(200).send("Request was recieved by Parser");
}

module.exports = {
    handlePOSTRequest: handlePOSTRequest
}