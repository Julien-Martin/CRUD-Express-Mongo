const express = require('express');

module.exports = (app) => {
    var todo = require('./controllers/todoController');

    app.get('/todo', todo.findAll);
    app.post('/todo/create', todo.add);
    app.get('/todo/delete/:id', todo.delete);
    app.post('/todo/update/:id', todo.update);

};