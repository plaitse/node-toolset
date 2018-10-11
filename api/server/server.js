// Library imports
const express = require('express');
const bodyParser = require('body-parser');

// Local imports
const { mongoose } = require('./mongoose/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.status(200).send(doc);
    }, (error) => {
        res.status(400).send(error);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.status(200).send({todos});
    }, (error) => {
        res.send(400).send(error);
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

module.exports = { app };