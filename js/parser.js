
var ExpressionFactory    = require("./ExpressionFactory");
var LiteralExpression    = require("./LiteralExpression");
var EndOfBlockExpression = require("./EndOfBlockExpression");

function Parser(data){
    
    this.headExpression = null;

 	if (data == null){
    	console.log("Parser: recieved null data");
    	return;
 	}
    
    var lines = data.split("\n");
    lines  = this.removeWhiteSpacesGreaterThan2(lines);

    lines = lines.filter(str => { if(str !== undefined) return str; } );

    console.log(lines);
    this.headExpression = this.makeAST(lines);
//    this.printInOrder(this.headExpression);
}

Parser.prototype.makeAST = function(lines){

	if ( lines != null){
		return this.doASTIteratively(lines);
	}
}

Parser.prototype.getTree = function(){
	return this.headExpression;
}

Parser.prototype.doASTIteratively = function(lines){

   var headExpression= ExpressionFactory.createExpression("parent");
   headExpression.name = "parent";

   var currentExpression;
   var currentLine;
   var previousParent;

   var stack = new Array();
   stack.push(headExpression);

   for (var i = 0; i < lines.length - 1; i++){ 
		currentLine = lines[i];

		if (currentLine === undefined) continue;

		if (currentLine === ' ') continue;

		currentExpression = ExpressionFactory.createExpression(currentLine);
        
        if ( currentLine.includes("else") ){

            console.log(previousParent);
            stack.push(previousParent);
            previousParent = null;
        }

		if ( currentExpression instanceof EndOfBlockExpression){
            previousParent = stack.pop();
			continue;
		}
        
        // Get Parent 
		var parentExpression = stack.pop(); 
        
        // Set expression branch name and parent
	    currentExpression.name = currentLine;
	    currentExpression.parent = parentExpression.name;
        
        // Add expression to parent
		parentExpression.addChild(currentExpression);

        if (!currentLine.includes("else")){
            stack.push( parentExpression );
        }

		if ( !(currentExpression instanceof LiteralExpression)){
			stack.push(currentExpression);
		}
	}

   return headExpression;
}

Parser.prototype.createExpression = function(str,parent){

  	var regularExpression = ExpressionFactory.createExpression(str); 
  	regularExpression.name= str;
    regularExpression.parent= parent;
    return regularExpression;
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

Parser.prototype.printInOrder = function(regularExpression){

	if (regularExpression == null ){
		return;
	}

	var queue = new Array()
	queue.push(regularExpression);

	while (queue.length != 0) {
        
        var amountOfChildren = queue[0].children.length;
        var currentExpression = queue[0];

        var currentLevel = ""
        currentLevel += " [ Parent : " + currentExpression.description + " ]\n";

		for (var i = 0; i < amountOfChildren; i++){
            
         	currentLevel += "[ "  + currentExpression.children[i].description +  " ] ";

         	if ( currentExpression.children[i].children.length !== 0){
         		queue.push(currentExpression.children[i]);
         	}

		}

		// Print line
		console.log(currentLevel);
        console.log("******************");

		// Remove first element
		queue.shift();
	}

	console.log("Done");
}


module.exports = Parser;