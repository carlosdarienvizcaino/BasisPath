

var axios = require('axios');
var id = 45;

axios.get(`http://localhost:3000/api/cf/${id}`)
.then(function(res){
  console.log("Data**:", res.data);
  //res.status(200).send("Everything went OK");
})
.catch(function(error){
    console.log(error);
});

url = 'http://localhost:3000/api/javaparser';
   axios.post(url, {
       
       data : {
           codeType : "c@",
           sourceCode: ""
       }
   })
   .then(function(res){
       console.log(res.status);
       console.log(res.data);
   })
   .catch(function(error){
        console.log(error);
    });