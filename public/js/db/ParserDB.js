
// public/js/db/ParserDB.js

var mongoose = require('mongoose');
var url = require('../db').ParserUrl;

mongoose.connect(url);
function ParserBatch(){
    
    this.Schema = mongoose.Schema;
    this.parserBatchSchema = new this.Schema({
        codeType : String,
    });
    
    return mongoose.model('ParserBatch', this.parserBatchSchema);
}

function save(data){
    
    var batch = new ParserBatch()(data);
    batch.save(function(err){
        if (err) throw err;
        console.log("User saved successfully");
    });
}

module.exports = {
    save : save
}
