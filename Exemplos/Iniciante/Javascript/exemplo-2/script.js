document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.querySelector('#addButton');
    const lista = document.querySelector('#lista');
    const form = document.querySelector('#meuForm');
    const formOutput = document.querySelector('#formOutput');

    // Adicionar item à lista
    addButton.addEventListener('click', function() {
        const novoItem = document.createElement('li');
        novoItem.textContent = 'Novo Item ' + (lista.children.length + 1);
        lista.appendChild(novoItem);
    });

    // Evento de formulário para exibir dados de entrada e prevenir o recarregamento da página
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o recarregamento da página
        const inputData = form.elements['meuInput'].value;
        formOutput.textContent = 'Você digitou: ' + inputData;
        form.reset(); // Limpa o formulário após o envio
    });

    // Manipulação de evento de clique em itens de lista
    lista.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            event.target.style.textDecoration = event.target.style.textDecoration === 'line-through' ? 'none' : 'line-through';
        }
    });
});
