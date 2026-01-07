CREATE DATABASE db_rh;

USE db_rh;

CREATE TABLE tb_colaboradores(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    salario DECIMAL(6,2) NOT NULL,
    data_admicao DATE,
    data_nascimento DATE
    );
    
INSERT INTO tb_colaboradores(nome , salario , data_admicao , data_nascimento) VALUES
("marcos alexandre " , 1500.00 , "2026-04-10", "1998-09-21") ,
("lucas lima " , 2500.00 , "2024-12-30", "1996-08-11"),
("lucia beatriz " , 3500.00 , "2013-04-27", "2000-01-07"),
("jose miguel" , 1900.00 , "2025-03-10", "1992-09-21"),
("andre cassio " , 2100.00 , "2024-11-20", "1998-09-13") ;


SELECT * FROM tb_colaboradores WHERE salario > 2000;
SELECT * FROM tb_colaboradores WHERE salario < 2000;

UPDATE tb_colaboradores SET salario = 2900 WHERE id=5;
