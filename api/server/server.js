// Library imports
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
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
    console.log('@@ 100 @@');
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

// DELETE
app.delete('/todos/:id', (req, res) => {
    let id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send('Id not valid');
    }
    Todo.findOneAndRemove({_id: id}).then((todo) => {
        if (!todo) {
            return res.status(404).send('Id not found');
        }
        res.status(200).send({todo})
    }).catch((error) => {
        res.status(400).send(error);
    });
});

// UPDATE BY ID
app.patch('/todos/:id', (req,res) => {
    const id = req.params.id;
    const body = _.pick(req.body, ['text', 'completed']);
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }
    Todo.findOneAndUpdate(id, { $set: body }, { new: true }).then((todo) => {
        if (!todo){
            return res.status(404).send();
        }
        res.status(200).send({todo:todo});
    }).catch((err) => {
        res.status(400).send()
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

module.exports = { app };