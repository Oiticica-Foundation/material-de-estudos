-- Criação da tabela 'cursos'
CREATE TABLE cursos (
    curso_id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

-- Criação da tabela 'estudantes'
CREATE TABLE estudantes (
    estudante_id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    curso_id INT,
    FOREIGN KEY (curso_id) REFERENCES cursos(curso_id)
);
