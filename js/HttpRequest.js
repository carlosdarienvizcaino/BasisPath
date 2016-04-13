
function createHttpRequest(requestType, url,stringData){
    
    var data = { "data" : stringData};
    data = JSON.stringify(data);

    // Do Post
    var http = new XMLHttpRequest();
    var url = "http://localhost:3000/ast";
    http.open(requestType,url, true);
     
    http.setRequestHeader('Content-type','application/json; charset=utf-8');

    http.onreadystatechange = function(){

        if(http.readyState == 4 && http.status == 200 ){
            return  http.responseText;
        }
    } 
   http.send(data);
}