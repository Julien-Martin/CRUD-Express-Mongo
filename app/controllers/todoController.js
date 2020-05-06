const Todo = require('../models/todo');

exports.findAll = (req, res) => {
    Todo.find({}, (err, result) => {
        return res.send(result);
    });
};

exports.add = (req, res) => {
    Todo.create(req.body, (err, result) => {
        if(err) return console.log(err);
        return res.send(result);
    });
};

exports.delete = (req, res) => {
    let id = req.params.id;
    Todo.deleteOne({'_id':id}, (err, result) => {
       if(err) return console.log(err);
       return res.send(result);
    });
};

exports.update = (req, res) => {
    let id = req.params.id;
    let data = req.body;
    Todo.update({'_id':id}, data, (err, result) => {
        if(err) return console.log(err);
        console.log('Todo update', result);
        return res.send(202);
    });
};