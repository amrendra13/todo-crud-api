const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = new mongoose.model('Todo', TodoSchema);