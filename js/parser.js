
function Parser(data){
    
 	if (data == null){
    	console.log("Parser: recieved null data");
    	return;
 	}
    
    console.log(data);
    var lines = data.split("\n");
    lines  = this.removeWhiteSpacesGreaterThan2(lines);

    console.log(lines);
}

Parser.prototype.removeWhiteSpacesGreaterThan2 = function(lines){
    
    var that = this;
    return lines.map( function(line){
        
        line = line.replace("\r", ""); 
        line = line.replace(/\s+/g,' ');

    	if ( !that.isStringEmpty(line)){  
    		return line;
    	}
    });

}

Parser.prototype.isStringEmpty = function(str){

	if ( str == null ){
		return true;
	}
     
    if ( str === undefined){
    	return true;
    }

	if ( str === ""){
		return true;
	}

	if ( str.length === 0){
		return true
	}
    
    return false;
}

module.exports = Parser;