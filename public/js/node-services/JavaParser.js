
// public/js/node-services/JavaParser.js

var DB = require("../db/ParserDB");

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

function handleRequest(req,res){
	console.log("Request was recieved by Parser");

    var parser = new Parser(req.body.state);
	DB.save({
		codeType : "java"
    	console.log("Batch was already saved");
    });	
    res.status(200).send("Request was recieved by Parser");
}

module.exports = {
    handleRequest : handleRequest
}
    
