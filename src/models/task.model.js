// src/models/task.model.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Task = sequelize.define('Task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    priority: {
        type: DataTypes.ENUM('low', 'medium', 'high'),
        allowNull: false,
        defaultValue: 'medium', // Default priority
    },
    dueDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM('pending', 'ongoing', 'done', 'backlog'),
        allowNull: false,
        defaultValue: 'pending', // Default status
    },
});

module.exports = Task;
