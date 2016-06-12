
// public/js/node-services/CF.js

var DB = require("../db/ControlFlowDB");


// Converts and abstract syntax tree to a binary tree.
function createExecutionTree(tree){
    
    if (tree == null){
        console.log( "Tree is null");
        return;
    }

    if ( tree.getChild(0) == null ){
       console.log("Tree does not have children");
       return;
    }
    
    doExecutionPath(tree.getChild(0));
    return tree;
    
}

function doExecutionPath(parentNode){

   var currentNode = null;
   var previousNode = null;
   var childrenAmount = parentNode.children.length; 
     
   // Don't inlcude the first child
   for (var i = childrenAmount - 1; i >= 0; --i){
        
		currentNode = parentNode.getChild(i);	
   		if (parentNode.instance === "ConditionalExpression"){

  			if (i != 0){
             
            	if (parentNode.isANestedConditional() ){

            		// Last Child
            		var lastNodeToTheRight = parentNode.getChild( parentNode.children.length - 1);
             		previousNode = parentNode.getChild(i-1);

             		previousNode.addChild(lastNodeToTheRight);

             		if ( i == 1 ){
             			parentNode.children.splice(parentNode.children.length-1,1);
             		}

            	}
            	else if ( parentNode.name.includes("else")){

            		previousNode = parentNode.getChild(i-1);
					previousNode.addChild(currentNode);
             		parentNode.children.splice(i,1);
            	}
            	else {

             		previousNode = parentNode.getChild(i-1);
             		previousNode.addChild(currentNode);

                	// Remove from parent 
                	// Is is not the last child
                	if ( i < childrenAmount - 1){
             			parentNode.children.splice(i,1);
                	}
  				}
  			}
  		}
  		else {
            
            // Not the first node from left to right 
            if (i!=0){
             	previousNode = parentNode.getChild(i-1);

             	previousNode.addChild(currentNode);
             	parentNode.children.splice(i,1);
            }	
  		}

  		if (currentNode.instance === "ConditionalExpression"){
  			this.doExecutionPath(currentNode);
  		}
   
    }
}

function handleRequest(req,res){
    // Log to a file
    DB.save({
        codeType : "c#",
        status   : "STARTED"
    });  
    res.status(200).send("Request reached Control Flow Service");
}

module.exports = {
    handleRequest : handleRequest
}
