

var gateWayAPI = require('./node-services/gateway-api-service/routes');

var querystring = require('querystring');
var http = require('http');

var data = { key : 'value'};
var postData = querystring.stringify(data);

var options = {
    hostname: 'localhost',
    port: 3000,
    path: '/api/javaparser',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

var req = http.request(options, (res) => {
    res.setEncoding('utf8');

    console.log("postToJavaParser Request()");
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
    
    res.on('end', (e) => {
        console.log(`No more data in response`);
    });
});

req.on('error', (e) => {
        console.log(`***********problem with request: ${e.message}`);
});

// write data to request body
req.write(postData);
req.end();



