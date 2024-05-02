Explicação das Media Queries

    Configuração Geral para Desktops:
        O layout inicial é horizontal com flex-direction: row. Navegação e barra lateral têm proporções menores comparadas ao conteúdo principal.
        O flex property is used to control the size of nav, article, and aside. The article has more space (flex: 3) compared to the navigation and sidebar (flex: 1 each).

    Media Query para Tablets (max-width: 768px):
        Quando a largura da tela é reduzida para 768 pixels ou menos, o layout muda para vertical com flex-direction: column. Isso torna a navegação, o conteúdo principal e a barra lateral empilhados verticalmente.
        Todas as seções (nav, article, aside) têm sua largura ajustada para 100%, e o flex property is removed (flex: none) para garantir que ocupem toda a largura da tela.
        O article is moved to the top using order: -1 to prioritize it visually.

    Media Query para Smartphones (max-width: 480px):
        O padding em todas as seções é reduzido para economizar espaço, o que é crucial em dispositivos com telas menores.
        Ajustes adicionais no gap and padding dentro do main e seus elementos internos ajudam a manter o layout ordenado e acessível.

Essas media queries permitem que o layout flexível se adapte de forma eficiente e eficaz aos diferentes tamanhos de tela, garantindo uma experiência de usuário otimizada em todos os dispositivos.