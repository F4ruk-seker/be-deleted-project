const express = require('express');
const Todo = require('../models/todo');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        console.error(error);
        res.status(500).send('Hata oluştu!');
    }
});

router.post('/', async (req, res) => {
    const newTodo = new Todo({
        title: req.body.title
    });

    try {
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        console.error(error);
        res.status(500).send('Hata oluştu!');
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.status(200).send('Todo başarıyla silindi!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Hata oluştu!');
    }
});

module.exports = router;
