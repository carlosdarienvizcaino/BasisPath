
// public/js/db/AstDB.js

var mongoose = require('mongoose');
var url = require('../db').ASTUrl;

mongoose.connect(url);
function ASTBatch(){
    
    this.Schema = mongoose.Schema;
    this.astBatchSchema = new this.Schema({
        codeType : String,
        status   : String
    });
    
    return mongoose.model('ASTBatch', this.astBatchSchema);
}

function save(data){
    
    var batch = new ASTBatch()(data);
    batch.save(function(err){
        if (err) throw err;
        console.log("User saved successfully");
    });
}

module.exports = {
    save : save
}
