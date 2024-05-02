document.addEventListener('DOMContentLoaded', function() {
    // Selecionar elementos
    const titulo = document.getElementById('titulo');
    const link = document.getElementById('link');
    const botao = document.getElementById('botao');

    // Modificar texto
    titulo.textContent = 'Novo Título da Página';

    // Modificar estilos
    titulo.style.color = 'blue';

    // Adicionar e remover classes
    titulo.classList.add('nova-classe');
    titulo.classList.remove('outra-classe');

    // Adicionar eventos
    botao.addEventListener('click', function() {
        titulo.style.color = titulo.style.color === 'red' ? 'blue' : 'red';
    });

    // Modificar atributos
    link.setAttribute('href', 'https://www.example.com');

    // Criar novos elementos
    const novoParagrafo = document.createElement('p');
    novoParagrafo.textContent = 'Este é um novo parágrafo adicionado pelo JavaScript.';

    // Adicionar elementos ao DOM
    document.body.appendChild(novoParagrafo);

    // Remover elementos
    // document.body.removeChild(novoParagrafo); // Descomente para remover o parágrafo adicionado
});
