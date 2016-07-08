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
    path: '/api/cf',
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

function getCodeExecutionGraph(data){
    
   data = querystring.stringify(data);
    
    var req = http.request(getCodeExecutionGraphOptions, (res) =>{
        res.setEncoding('utf8');
        
        res.on('data', (responseData) => {
            console.log(responseData);
            return responseData;
        });
    });
    
    req.write(data);
    req.end();
}

module.exports = {
    POSTJavaParser : postToJavaParser,
    GETCodeExecutionGraph : getCodeExecutionGraph
}