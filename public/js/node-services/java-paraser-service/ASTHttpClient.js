
var axios = require('axios');

function POSTListOfTokens(reqData){
    
    var url = "http://localhost:3008/api/ast";
    
    axios.post(url, createRequestBody(reqData))
    .then(function(response){
        console.log(response.data);
    })
    .catch(function(error){
        console.log(error);
    })
}

function createRequestBody(reqData){
    return {
        data : {
            batchId : reqData.batchId,
            tokens  : reqData.tokens
        }
    };
}

module.exports = {
    POSTListOfTokens : POSTListOfTokens        
}