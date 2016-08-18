
var DB = require("../../db/AstDB");
var CodeExecutionGraphHttpClient = require('./CodeExecutionGraphHttpClient');

function handlePOSTRequest(req,res){
      console.log("Request reached AST Service");
     
      DB.save({
         batchId  : req.body.batchId,
         codeType : req.body.codeType,
         status   : "STARTED"
      });
      
      res.status(200).send("Request reached AST Service");
      
    CodeExecutionGraphHttpClient.POST_AST({
        batchId : req.body.batchId,
        ast     : null
    });      
}

module.exports = {
    handlePOSTRequest: handlePOSTRequest
}