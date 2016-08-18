
var ParentExpression = require("./ParentExpression");

function LiteralExpression(line, description){
  ParentExpression.call(this,line,description);
  this.instance = "LiteralExpression";
}

LiteralExpression.prototype = Object.create(ParentExpression.prototype);

module.exports = LiteralExpression;