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


function postToJavaParser(data){
    console.log("postToJavaParser()");
    data = querystring.stringify(data);
    
    var req = http.request(postToJavaParserOptions, function(res){
      res.setEncoding('utf8');
      console.log("postToJavaParser Request()");
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
    console.log("end of postToJavaParser()");
}

module.exports = {
    postToJavaParser : postToJavaParser
}