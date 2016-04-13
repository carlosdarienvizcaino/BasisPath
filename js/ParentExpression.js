

function ParentExpression(line, description){
    
    this.instance = "ParentExpression";
	this.line = line || -1;
	this.description  = description || "";
	this.children = [];
}

ParentExpression.prototype.addChild = function(child){
 this.children.push(child);
}

module.exports = ParentExpression;