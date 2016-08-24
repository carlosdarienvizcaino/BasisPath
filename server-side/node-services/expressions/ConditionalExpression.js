var ParentExpression = require("./ParentExpression")

function ConditionalExpression(line, description){
  ParentExpression.call(this,line,description);
  this.instance = "ConditionalExpression";
}

ConditionalExpression.prototype = Object.create(ParentExpression.prototype);

ConditionalExpression.prototype.isANestedConditional = function(){

	if (this.name.includes("if") ){
		var sencodChild = this.children[1];
		if (sencodChild != undefined && sencodChild.name.includes("else")){
			return true;
		}	
	}
	return false;
}

module.exports = ConditionalExpression;