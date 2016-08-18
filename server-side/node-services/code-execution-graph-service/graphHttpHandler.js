
var DB = require("../../db/ControlFlowDB");

function handlePOSTRequest(req,res){
    // Log to a file
    DB.save({
        codeType : "c#",
        status   : "STARTED"
    });  
    res.status(200).send("Request reached Code Execution Graph Service");
}

function handleGETRequest(req,res){
	console.log("GET Request was received in CF");
	console.log(req.params);
	res.status(200).send({
		status : "COMPLETED",
		data   : "Data data data"
	});
}

module.exports = {
    handlePOSTRequest : handlePOSTRequest,
	handleGETRequest  : handleGETRequest
}