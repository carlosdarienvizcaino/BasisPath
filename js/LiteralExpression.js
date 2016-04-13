
var ParentExpression = require("./ParentExpression");

function LiteralExpression(line, description){
  ParentExpression.call(this,line,description);
  this.instance = "LiteralExpression";
}

LiteralExpression.prototype.addChild = function(child){
 	console.warn("LiteraExpression: does not add child %s", child);
}

module.exports = LiteralExpression;