const { Mongoose } = require("mongoose");

const mongoose= require('mongoose');

const HelloSchema = mongoose.Schema({
    name: String,
    message: String
},{
    timestamps: true
});

module.exports = mongoose.model('Hello',HelloSchema);