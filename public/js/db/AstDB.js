
// public/js/db/AstDB.js

var mongoose = require('mongoose');
var url = require('../db').ASTUrl;

// Create a connection
var connection = mongoose.createConnection(url);

// Get schema from this mongoose instance
var Schema = mongoose.Schema;
// Define a model with this mongoose instance
mongoose.model("AST_Batch", new Schema({
    codeType: String
}));

// Retrieve model from connection
var BatchModel = connection.model('AST_Batch');

function save(data){
  
    var batchModel = new BatchModel(data); 
    batchModel.save(function(err){
    	if (err) throw err;
	console.log("Parser Batch was saved successfully");
    });
}

module.exports = {
    save : save
}
