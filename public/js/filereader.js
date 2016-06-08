 
var fs = require('fs');


function FileReader(filePath){
    
    return  fs.readFileSync(filePath, 'utf8'); 
}


module.exports = FileReader;