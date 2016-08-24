

function ParentExpression(name,parent){
    
    this.instance = "ParentExpression";
	this.name = name || "";
    this.parent   = parent || null;
	this.children = [];
}

ParentExpression.prototype.addChild = function(child){
 this.children.push(child);
}

ParentExpression.prototype.getChild = function(index){
 	
 	if (index === undefined) return null;

 	if (index < 0 || index >= this.children.lenght) return null;

 	return this.children[index];
}

ParentExpression.prototype.getChildrenAmount = function(){
	return this.children.lenght;
}

module.exports = ParentExpression;