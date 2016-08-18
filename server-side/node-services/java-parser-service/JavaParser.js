
// public/js/node-services/JavaParser.js

var DB = require("./JavaParserDB");

function Parser(data){
 	if (data == null){
    	console.log("Parser: recieved null data");
    	return;
 	}
   
    var lines = data.split("\n");
    lines  = this.removeWhiteSpacesGreaterThan2(lines);

    lines = lines.filter(str => { if(str !== undefined) return str; } );
	
	// Post lines to and enpoint
    	
}

Parser.prototype.makeAST = function(lines){

	if ( lines != null){
		return this.doASTIteratively(lines);
	}
}

Parser.prototype.getGraphs= function(){
	return {
      "AST": this.headExpression,
      "CFG": this.codeFlowGraph
	};
}

Parser.prototype.removeWhiteSpacesGreaterThan2 = function(lines){
    
    var that = this;
    return lines.map( function(line){
        
        line = line.replace("\r", ""); 
        line = line.replace(/\s+/g,' ');
         
        var indexOfComment = line.search("/");
        
        if ( indexOfComment != -1){
        	line = line.substring(0,indexOfComment);
        }

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

    
