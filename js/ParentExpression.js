

function ParentExpression(name,parent){
    
    this.instance = "ParentExpression";
	this.name = name || "";
    this.parent   = parent || null;
	this.children = [];
}

ParentExpression.prototype.addChild = function(child){
 this.children.push(child);
}

module.exports = ParentExpression;