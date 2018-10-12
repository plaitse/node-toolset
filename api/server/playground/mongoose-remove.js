const { ObjectID } = require('mongodb');

const { mongoose } = require('../mongoose/mongoose');
const { Todo } = require('../models/todo');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findByOneAndRemove({_id: '5bc05a91abdf90296d9bdc9c'}).then((todo) => {
//     console.log(todo);
// });

// Todo.findByIdAndRemove('5bc05a91abdf90296d9bdc9c').then((todo) => {
//     console.log(todo);
// });