
var DB = require("../../db/AstDB");

function handlePOSTRequest(req,res){
      console.log("Request reached AST Service");
      DB.save({
         codeType : "java",
         status   : "STARTED"
      });
      
      res.status(200).send("Request reached AST Service");
}

module.exports = {
    handlePOSTRequest: handlePOSTRequest
}