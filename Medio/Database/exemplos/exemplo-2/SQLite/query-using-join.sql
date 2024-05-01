SELECT e.nome AS Estudante, c.nome AS Curso
FROM estudantes e
JOIN cursos c ON e.curso_id = c.curso_id;
