-- Criar uma tabela
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER
);

-- Inserir dados na tabela
INSERT INTO users (name, age) VALUES ('Charlie', 22);

-- Consultar dados na tabela
SELECT * FROM users;
