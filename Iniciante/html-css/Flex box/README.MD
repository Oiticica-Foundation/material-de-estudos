Detalhes do Código

    Estrutura do Flexbox:
        O elemento <body> é configurado como um contêiner flex com direção de coluna (flex-direction: column), o que permite que o cabeçalho e o rodapé sejam dispostos verticalmente com o conteúdo principal entre eles.
        O <main> também é um contêiner flex, mas com a direção padrão (linha), permitindo que a navegação, o conteúdo principal e a barra lateral sejam dispostos horizontalmente.

    Estilos CSS:
        flex: 1 no <article> faz com que ele ocupe o espaço restante entre a navegação e a barra lateral, adaptando-se ao tamanho da janela.
        Padding e cores de fundo são adicionados para diferenciar visualmente cada seção da página.

Esse método é altamente recomendado para layouts modernos porque é mais flexível, acessível e semântico, facilitando a manutenção e melhorando a experiência do usuário em diferentes dispositivos.