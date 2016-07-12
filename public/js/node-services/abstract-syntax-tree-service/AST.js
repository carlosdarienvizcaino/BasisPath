// public/js/node-services/AST.js

var ExpressionFactory = require("./expressions/ExpressionFactory");
var DB                = require("../db/AstDB");

function makeAST(lineOfTokens){
    
    if (lines != null){
        return doASTIteratively(lineOfTokens);
    }
}

function doASTIteratively(lines){

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

function printInOrder(regularExpression){

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

function handleRequest(req,res){
      console.log("Request reached AST Service");
      DB.save({
         codeType : "java",
         status   : "STARTED"
      });
      
      res.status(200).send("Request reached AST Service");
}

module.exports = {
    handleRequest : handleRequest
}