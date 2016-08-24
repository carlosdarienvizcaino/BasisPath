
var querystring = require('querystring');
var async = require('async');
var http = require('http');


var option = {
    hostname: 'localhost',
    port: 3000,
    path: '/api/cf/45',
    method: 'GET',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

function doStuff(data){
    async.waterfall([
        async.apply(sendRequest,data),
    ], handleResponse);
}

function sendRequest(data, callback){
    data = querystring.stringify({});
    var req = http.request(option, (res) => {
        callback(res);
    }); 
    
    req.write(data);
    req.end();
}

function handleResponse(err,res){
    if(!err){
        console.log(res);
        res.statu(200).send("Is all good");
    }
}

doStuff({id: "someId"});

