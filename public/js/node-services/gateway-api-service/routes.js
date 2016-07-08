// public/js/node-services/gateway-api-services/routes.js

var querystring = require('querystring');
var http = require('http');

var postToJavaParserOptions = {
    hostname: 'localhost',
    port: 3000,
    path: '/api/javaparser',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

var getCodeExecutionGraphOptions = {
    hostname: 'localhost',
    port: 3000,
    path: '/api/cf/45',
    method: 'GET',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};


function postToJavaParser(data){
    data = querystring.stringify(data);
    
    var req = http.request(postToJavaParserOptions, function(res){
      res.setEncoding('utf8');

      res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
      });
    
      res.on('end', () => {
        console.log('No more data in response.')
      });
      
    });
    
    var req = http.request(postToJavaParserOptions);
    
    req.on('error', () => {
        console.log("Something went wrong wit request");
    });
    
    req.write(data);
    req.end();
}

function getCodeExecutionGraph(request,response){
    console.log("At getCodeExecutionGraph");
    var data = querystring.stringify({});
    
    var req = http.request(getCodeExecutionGraphOptions, (res) =>{
        res.setEncoding('utf8');
 
        res.on('data', (responseData) => {
            console.log("Data: " + responseData);
            response.status(200).send("Sucessful: " + responseData);
        });
        
        res.on('end', (end) => {
            console.log("The END" + end);
        });
        
    });
    
    req.on('error', (error) =>{
        console.log("Ups something went wrong " + error);
    });
    
    req.write(data);
    req.end();
}

module.exports = {
    POSTJavaParser : postToJavaParser,
    GETCodeExecutionGraph : getCodeExecutionGraph
}