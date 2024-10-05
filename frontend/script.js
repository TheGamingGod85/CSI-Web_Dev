const apiUrl = 'http://localhost:3000/tasks';

// Function to fetch and display tasks
async function fetchTasks() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const tasks = await response.json();
        const taskList = document.getElementById('tasks');
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = `${task.title} - Priority: ${task.priority} - Due: ${task.dueDate.split('T')[0]} - Status: ${task.status}`;
            taskList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}

// Function to add a new task
document.getElementById('taskForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('taskTitle').value;
    const priority = document.getElementById('taskPriority').value;
    const dueDate = document.getElementById('taskDueDate').value;
    const status = document.getElementById('taskStatus').value;

    const newTask = {
        title,
        priority,
        dueDate,
        status
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        fetchTasks(); // Refresh the task list after adding a new task
    } catch (error) {
        console.error('Error adding task:', error);
    }
});

// Fetch tasks on page load
fetchTasks();
