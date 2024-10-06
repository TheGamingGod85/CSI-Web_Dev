// server.js
const express = require('express');
const cors = require('cors');
const sequelize = require('./src/database');
const TaskRoutes = require('./src/routes/tasks');

const app = express();
app.use(cors());
app.use(express.json()); // Middleware for parsing JSON requests

app.use('/tasks', TaskRoutes); // Register task routes

const PORT = process.env.PORT || 3000;

// Sync database and start server
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});
