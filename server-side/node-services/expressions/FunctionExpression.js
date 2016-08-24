
var ParentExpression = require("./ParentExpression")

function FunctionExpression(line, description){
  ParentExpression.call(this,line,description);
  this.instance = "FunctionExpression";
}

FunctionExpression.prototype = Object.create(ParentExpression.prototype);

module.exports = FunctionExpression;