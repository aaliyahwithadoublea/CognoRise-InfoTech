document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Load tasks from local storage
    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        taskList.innerHTML = '';
        tasks.forEach(task => addTaskToDOM(task));
    };

    // Add task to the DOM
    const addTaskToDOM = (task) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="text" value="${task}" readonly>
            <span class="edit">Edit</span>
            <span class="delete">Delete</span>
        `;
        taskList.appendChild(li);
    };

    // Save tasks to local storage
    const saveTasks = () => {
        const tasks = [];
        document.querySelectorAll('#taskList li input[type="text"]').forEach(input => {
            tasks.push(input.value);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    // Add task event listener
    addTaskButton.addEventListener('click', () => {
        const task = taskInput.value.trim();
        if (task) {
            addTaskToDOM(task);
            taskInput.value = '';
            saveTasks();
        }
    });

    // Edit and delete task event listener
    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete')) {
            e.target.parentElement.remove();
            saveTasks();
        } else if (e.target.classList.contains('edit')) {
            const input = e.target.previousElementSibling;
            if (input.readOnly) {
                input.readOnly = false;
                input.focus();
                e.target.textContent = 'Save';
            } else {
                input.readOnly = true;
                e.target.textContent = 'Edit';
                saveTasks();
            }
        }
    });

    // Load tasks initially
    loadTasks();
});


