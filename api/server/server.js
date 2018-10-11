// Library imports
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

// Local imports
const { mongoose } = require('./mongoose/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

// POST
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

// GET ALL
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.status(200).send({todos});
    }, (error) => {
        res.send(400).send(error);
    });
});

// GET BY ID
app.get('/todos/:id', (req, res) => {
    let id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send('Id not valid');
    }
    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send('Id not found');
        }
        res.status(200).send({todo})
    }).catch((error) => {
        res.status(400).send(error);
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

module.exports = { app };