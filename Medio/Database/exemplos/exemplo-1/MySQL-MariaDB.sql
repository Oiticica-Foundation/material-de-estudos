-- Criar uma tabela
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    age INT
);

-- Inserir dados na tabela
INSERT INTO users (name, age) VALUES ('Bob', 25);

-- Consultar dados na tabela
SELECT * FROM users;
