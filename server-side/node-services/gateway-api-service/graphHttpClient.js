
var axios = require('axios');


function GETGraphById(clientReq,clientRes){
    
    var url = `http://localhost:3000/api/cf/${clientReq.params.id}`;
    axios.get(url)
    .then(function(response){
        console.log(response.data);
        clientRes.status(200).send(response.data);
    })
    .catch(function(error){
        console.log(error);
        clientRes.status(500).send(err);
    });
}

module.exports = { 
     GETGraphById : GETGraphById
}