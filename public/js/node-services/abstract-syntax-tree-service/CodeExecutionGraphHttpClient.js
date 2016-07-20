var axios = require('axios');

function POST_AST(reqData){
    
    var url = "http://localhost:3004/api/cf/";
    axios.post(url, createRequestBody(reqData))
    .then(function(response){
        console.log(response.data);
    })
    .catch(function(error){
        console.log(error);
    });
}

function createRequestBody(reqData){
    return {
        data : {
            batchId : reqData.batchId,
            tokens  : reqData.ast
        }
    };
}

module.exports = { 
     POST_AST : POST_AST 
}