document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const allBtn = document.getElementById('all-btn');
    const completedBtn = document.getElementById('completed-btn');
    const pendingBtn = document.getElementById('pending-btn');

    let tasks = [];

    const renderTasks = (filter = 'all') => {
        taskList.innerHTML = '';

        const filteredTasks = tasks.filter(task => {
            if (filter === 'completed') return task.completed;
            if (filter === 'pending') return !task.completed;
            return true;
        });

        filteredTasks.forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.textContent = task.text;
            if (task.completed) taskItem.classList.add('completed');

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => {
                tasks.splice(index, 1);
                renderTasks(filter);
            });

            taskItem.appendChild(deleteBtn);
            taskItem.addEventListener('click', () => {
                task.completed = !task.completed;
                renderTasks(filter);
            });

            taskList.appendChild(taskItem);
        });
    };

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            tasks.push({ text: taskText, completed: false });
            taskInput.value = '';
            renderTasks();
        }
    });

    allBtn.addEventListener('click', () => renderTasks('all'));
    completedBtn.addEventListener('click', () => renderTasks('completed'));
    pendingBtn.addEventListener('click', () => renderTasks('pending'));
});
