const { mongoose } = require('./../mongoose/mongoose');
const { Todo } = require('./../models/todo');

const id = '5bbf31c6110e780b26bcf0be';

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});