const mongoose= require('mongoose');

// eslint-disable-next-line new-cap
const HelloSchema = mongoose.Schema({
    name: String,
    message: String,
}, {
    timestamps: true,
});

module.exports = mongoose.model('Hello', HelloSchema);
