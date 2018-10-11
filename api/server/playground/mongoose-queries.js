const { ObjectID } = require('mongodb');

const { mongoose } = require('./../mongoose/mongoose');
const { Todo } = require('./../models/todo');

// const id = '5bbf31c6110e780b26bcf0be';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// } 

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((err) => console.log(err));