-- Criar uma tabela
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    age INTEGER
);

-- Inserir dados na tabela
INSERT INTO users (name, age) VALUES ('Alice', 30);

-- Consultar dados na tabela
SELECT * FROM users;
