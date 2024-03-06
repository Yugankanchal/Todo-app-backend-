const mongoose = require('mongoose');

const TodoSChema = new mongoose.Schema({
    description: {
        type: String,
        require: true
    },
    dueDate: {
        type: String,
        require: true
    }, category: {
        type: String,
        require: true
    }
})

const todoList = mongoose.model('Todo', TodoSChema);

module.exports = todoList;