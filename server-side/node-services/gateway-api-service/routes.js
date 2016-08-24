// public/js/node-services/gateway-api-services/routes.js


/*
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
*/

var routeHttpHandler = require('./routeHttpHandler');
var graphHttpHandler = require('./graphHttpHandler');

module.exports  = function(app){

    app.post('/api/basispath', function(req, res){
        routeHttpHandler.handlePOSTRequest(req,res);
    });
    
    app.get('/api/basispath/:id', function(req,res){
        graphHttpHandler.handleGETRequest(req,res);
    });
}