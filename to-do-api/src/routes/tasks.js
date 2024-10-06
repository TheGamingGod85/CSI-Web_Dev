// src/routes/tasks.js
const express = require('express');
const { Op } = require('sequelize');
const router = express.Router();
const Task = require('../models/task.model');

// Create a new task
router.post('/new', async (req, res) => {
    try {
        const { title, priority, dueDate, status } = req.body;
        const task = await Task.create({ title, priority, dueDate, status });
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Read all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read a single task by ID
router.get('/:id', async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) return res.status(404).json({ error: 'Task not found' });
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a task by ID
router.put('/:id', async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) return res.status(404).json({ error: 'Task not found' });

        const { title, priority, dueDate, status } = req.body;
        await task.update({ title, priority, dueDate, status });
        res.json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a task by ID
router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) return res.status(404).json({ error: 'Task not found' });

        await task.destroy();
        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get tasks by priority
router.get('/priority/:priority', async (req, res) => {
    try {
        const tasks = await Task.findAll({ where: { priority: req.params.priority } });
        if (tasks.length === 0) return res.status(404).json({ error: 'No tasks found with this priority' });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get tasks by due date
router.get('/due/:dueDate', async (req, res) => {
    try {
        const tasks = await Task.findAll({
            where: {
                dueDate: {
                    [Op.eq]: new Date(req.params.dueDate.split('-').reverse().join('-')) // Convert date format to YYYY-MM-DD
                }
            }
        });
        if (tasks.length === 0) return res.status(404).json({ error: 'No tasks found with this due date' });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get tasks by status
router.get('/status/:status', async (req, res) => {
    try {
        const tasks = await Task.findAll({ where: { status: req.params.status } });
        if (tasks.length === 0) return res.status(404).json({ error: 'No tasks found with this status' });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
