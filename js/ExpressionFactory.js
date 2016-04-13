
var ConditionalExpression     = require('./ConditionalExpression');
var LiteralExpression         = require('./LiteralExpression');
var FunctionExpression        = require('./FunctionExpression');
var ParentExpression          = require('./ParentExpression');
var EndOfBlockExpression      = require("./EndOfBlockExpression");

/*
 Receives a string
 Parses a string to mach it with an expression
 
 Known expreesions
*/
function ExpressionFactory(str){
   
   var that = this;
   this.END_STATEMENT = ";";
}

ExpressionFactory.createExpression = function(str){
     

     if (str === "parent"){
	 	return new this.expression["parent"]();
     }

     if ( this.isEndOfBlockExpression(str) ){
         return new this.expression["End_Of_Block"]();
     }
	 else if ( this.isLiteralExpression(str) ){
	 	return new this.expression["literal"]();
	 }
	 else if ( this.isConditionalExpression(str) ){
	 	return new this.expression["conditional"]();
	 }
	 else if ( this.isFunctionExpression(str)){
	 	return new this.expression['function']();
	 }
	
	 return new this.expression['literal']();
}


ExpressionFactory.isLiteralExpression = function(str){
    
    if (str == null || str === undefined )return false;
    
	return str.includes(";");
}

ExpressionFactory.isEndOfBlockExpression = function(str){
    
    if (str == null || str === undefined )return false;
	
	return str.includes("}");
}

ExpressionFactory.isConditionalExpression = function(str){
    
    if (str == null || str === undefined ) return false;


	if ( str.includes("while") ) return true;
	
	if ( str.includes("for") ) return true;

	if ( str.includes("if") ) return true;

	if ( str.includes("else") ) return true;
    
    return false;
}

ExpressionFactory.isFunctionExpression= function(str){
    
    if (str == null || str === undefined )return false;

	var strLines = str.split(" ");

    if (strLines == null || strLines.length < 3){
    	return false;
    }

    if ( !str.includes("(") || !str.includes(")") ){
    	return false;
    }

    return true;
}

ExpressionFactory.expression = {
    
	"conditional"  : ConditionalExpression,
	"literal"      : LiteralExpression,
	"function"     : FunctionExpression,
    "parent"       : ParentExpression,
    "End_Of_Block" : EndOfBlockExpression 
}


module.exports = ExpressionFactory; 
