var axios = require('axios');


function POST(reqData){ 
      
   var url = 'http://localhost:3000/api/javaparser';
   axios.post(url, createRequestBody(reqData) )
   .then(function(response){
       
   })
   .catch(function(error){
        console.log(error);
   });
}

function createRequestBody(reqData){
    return {
      data : {
         batchId : reqData.batchId,
         sourceCode: reqData.sourceCode 
      }  
    };
}

module.exports = {
    POST : POST
}