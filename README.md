# Task Management API

## Overview
This project is a RESTful API for a simple Task Management application. It allows users to create, read, update, and delete tasks. The API also supports filtering tasks by status and due date, enabling efficient management of tasks in a to-do list.

## Features
- **Create Tasks**: Add new tasks with attributes such as title, priority, due date, and status.
- **Read Tasks**: Retrieve all tasks or filter tasks by status or due date.
- **Update Tasks**: Modify existing tasks by updating their attributes.
- **Delete Tasks**: Remove tasks from the database.
- **Error Handling**: Comprehensive error handling for all endpoints.

## Technologies Used
- **Node.js**: JavaScript runtime for building the API.
- **Express**: Web framework for Node.js to handle routing and middleware.
- **SQLite**: Lightweight database for storing task data.
- **Sequelize**: ORM for managing database interactions.
  
## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TheGamingGod85/CSI-Web_Dev.git
   ```
2. Navigate to the project directory:
   ```bash
   cd CSI-Web_Dev
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Create a Task
- **POST** `/tasks/new`
- **Request Body**:
  ```json
    {
        "title": "Sample Task 4",
        "priority": "high", // Priority can be 'high', 'medium', or 'low'
        "dueDate": "2024-10-25", // Format YYYY-MM-DD
        "status": "backlog"  // Status can be 'pending', 'ongoing', 'done', or 'backlog'
    }
  ```

### Get All Tasks
- **GET** `/tasks`

### Get Tasks by Status
- **GET** `/tasks/status/:status`
- **Example**: `/tasks/status/pending`

### Get Tasks by Due Date
- **GET** `/tasks/due/:dueDate`
- **Example**: `/tasks/due/20-10-2024`

### Update a Task
- **PUT** `/tasks/:id`
- **Request Body**:
  ```json
  {
      "title": "Updated Task Title",
      "priority": "medium",
      "dueDate": "2024-10-21",
      "status": "ongoing"
  }
  ```

### Delete a Task
- **DELETE** `/tasks/:id`

## Postman Workspace
You can import and test the API using the provided Postman workspace:
[CSI ToDo API Postman Workspace](https://www.postman.com/mission-participant-78873652/workspace/csi-todo-api)
The name of the account on Postman is different because it was created to reduce spam on my main email.

## Author
**Aayushya Lakkadwala**  
0827CS231008  
CSI Web-Dev Track  
