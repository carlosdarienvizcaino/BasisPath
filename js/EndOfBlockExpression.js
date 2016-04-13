
var ParentExpression = require("./ParentExpression")


function EndOfBlockExpression(line, description){
  ParentExpression.call(this,line,description);
  this.instance = "EndOfBlockExpression";
}

EndOfBlockExpression.prototype.addChild = function(child){
	this.children.push(child);
}

module.exports = EndOfBlockExpression;