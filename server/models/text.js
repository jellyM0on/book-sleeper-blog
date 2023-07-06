const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const TextSchema = new Schema({
    title: {type: String, required: true}, 
    content: {type: String, required: true},
    date: {type: Date}
})

const Text = mongoose.model('works', TextSchema)
module.exports = Text; 