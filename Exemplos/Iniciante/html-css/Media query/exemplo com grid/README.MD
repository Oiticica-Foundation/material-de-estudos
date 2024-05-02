Explicação das Media Queries

    Geral: O layout inicial usa um grid com três colunas, apropriado para visualizações em desktop com uma largura de tela maior.
    Média query para tablets (max-width: 768px):
        Quando a largura da tela é 768 pixels ou menos (como em tablets), o layout muda para uma única coluna (grid-template-columns: 1fr). Isso coloca navegação, conteúdo principal e barra lateral em uma sequência vertical.
        Utiliza-se grid-template-rows: auto auto auto para ajustar as alturas automaticamente de acordo com o conteúdo de cada seção.
        O order: -1 para nav e aside move a navegação e a barra lateral para o topo, logo abaixo do cabeçalho.
    Média query para smartphones (max-width: 480px):
        Reduz o padding em todas as seções para economizar espaço e tornar o conteúdo mais acessível em dispositivos com telas menores.
        Reduz o espaçamento entre as áreas (gap: 5px), otimizando o layout para telas muito pequenas.

Esse uso de media queries é essencial para criar designs responsivos que se adaptam a uma ampla gama de dispositivos, melhorando a usabilidade e a acessibilidade do site.