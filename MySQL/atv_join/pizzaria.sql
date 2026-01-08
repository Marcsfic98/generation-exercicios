CREATE DATABASE db_pizzaria_legal;
USE db_pizzaria_legal;

CREATE TABLE tb_categorias (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(255) NOT NULL,
    tamanho VARCHAR(255) NOT NULL
);

CREATE TABLE tb_pizzas (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    ingredientes VARCHAR(255),
    preco DECIMAL(6,2) NOT NULL,
    borda_recheada BOOLEAN,
    categoriaid BIGINT,
    CONSTRAINT fk_pizzas_categorias FOREIGN KEY (categoriaid) REFERENCES tb_categorias(id)
);

INSERT INTO tb_categorias (tipo, tamanho) VALUES 
("Salgada", "Grande"),
("Doce", "Broto"),
("Vegetariana", "Grande"),
("Premium", "Giga"),
("Especial", "Média");

INSERT INTO tb_pizzas (nome, ingredientes, preco, borda_recheada, categoriaid) VALUES 
("Mussarela", "Molho e queijo mussarela", 42.00, false, 1),
("Margherita", "Mussarela, manjericão e tomate", 48.00, true, 1),
("Calabresa", "Calabresa e cebola", 40.00, false, 1),
("Chocolate com Morango", "Chocolate ao leite e morangos", 55.00, false, 2),
("Quatro Queijos", "Mussarela, provolone, parmesão e gorgonzola", 60.00, true, 4),
("Shimeji", "Cogumelos e queijo branco", 85.00, true, 3),
("Moda da Casa", "Presunto, ovos, cebola e milho", 47.00, true, 5),
("Brigadeiro", "Chocolate e granulado", 35.00, false, 2);

SELECT * FROM tb_pizzas WHERE preco > 45.00;

SELECT * FROM tb_pizzas WHERE preco BETWEEN 50.00 AND 100.00;

SELECT * FROM tb_pizzas WHERE nome LIKE "%M%";



SELECT * FROM tb_pizzas 
INNER JOIN tb_categorias ON tb_pizzas.categoriaid = tb_categorias.id;

SELECT * FROM tb_pizzas 
INNER JOIN tb_categorias ON tb_pizzas.categoriaid = tb_categorias.id
WHERE tb_categorias.tipo = "Doce";