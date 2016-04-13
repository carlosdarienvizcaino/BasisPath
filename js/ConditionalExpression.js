var ParentExpression = require("./ParentExpression")

function ConditionalExpression(line, description){
  ParentExpression.call(this,line,description);
  this.instance = "ConditionalExpression";
}

ConditionalExpression.prototype.addChild = function(child){
	this.children.push(child);
}

module.exports = ConditionalExpression;