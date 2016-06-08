
var ParentExpression = require("./ParentExpression")

function EndOfBlockExpression(line, description){
  ParentExpression.call(this,line,description);
  this.instance = "EndOfBlockExpression";
}

EndOfBlockExpression.prototype = Object.create(ParentExpression.prototype);

module.exports = EndOfBlockExpression;