const mongoose = require("mongoose");

const exampleSchema = mongoose.Schema({
    name: { type: String },
    body: { type: String }
});

module.exports = mongoose.model('exampleModel', exampleSchema);