
var ParentExpression = require("./ParentExpression")

function FunctionExpression(line, description){
  ParentExpression.call(this,line,description);
  this.instance = "FunctionExpression";
}

FunctionExpression.prototype.addChild = function(child){
	this.children.push(child);
}

module.exports = FunctionExpression;