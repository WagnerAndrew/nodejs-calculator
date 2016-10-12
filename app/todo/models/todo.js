var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = Schema({
    what: { type: String },
    id : { type: String },
});

var TodoModel = mongoose.model('Todo', todoSchema);

module.exports = TodoModel;