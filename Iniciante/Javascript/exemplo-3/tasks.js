document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Função para adicionar tarefa
    function addTask() {
        if (taskInput.value.trim() === '') {
            alert('Por favor, insira uma tarefa.');
            return;
        }

        const newTask = document.createElement('li');
        newTask.textContent = taskInput.value;
        newTask.addEventListener('click', function() {
            // Marca ou desmarca a tarefa como completada
            newTask.classList.toggle('completed');
        });

        // Adicionar botão de remoção
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.addEventListener('click', function() {
            taskList.removeChild(newTask);
        });

        newTask.appendChild(removeButton);
        taskList.appendChild(newTask);
        taskInput.value = ''; // Limpar input após adição
    }

    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
