document.addEventListener('DOMContentLoaded', function() {
    const taskList = document.getElementById('taskList');
    const fetchTasksButton = document.getElementById('fetchTasks');
    const axiosTasksButton = document.getElementById('axiosTasks');
    const xhrTasksButton = document.getElementById('xhrTasks');

    // Função para adicionar tarefas à lista
    function addTaskToDOM(task) {
        const listItem = document.createElement('li');
        listItem.textContent = task.title; // assumindo que a API retorna um objeto com 'title'
        taskList.appendChild(listItem);
    }

    // Usando Fetch
    fetchTasksButton.addEventListener('click', function() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => {
                taskList.innerHTML = '';
                data.forEach(task => addTaskToDOM(task));
            })
            .catch(error => console.error('Error fetching tasks:', error));
    });

    // Usando Axios
    axiosTasksButton.addEventListener('click', function() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                taskList.innerHTML = '';
                response.data.forEach(task => addTaskToDOM(task));
            })
            .catch(error => console.error('Error fetching tasks:', error));
    });

    // Usando XMLHttpRequest
    xhrTasksButton.addEventListener('click', function() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
        xhr.responseType = 'json';
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                taskList.innerHTML = '';
                xhr.response.forEach(task => addTaskToDOM(task));
            } else {
                console.error('Error fetching tasks:', xhr.statusText);
            }
        };
        xhr.onerror = function() {
            console.error('Network error');
        };
        xhr.send();
    });
});
