CREATE DATABASE db_ecommerce;
USE db_ecommerce;

CREATE TABLE tb_produtos (
    id BIGINT AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    marca VARCHAR(100),
    categoria VARCHAR(100),
    preco DECIMAL(6, 2) NOT NULL,
    estoque INT,
    PRIMARY KEY (id)
);

INSERT INTO tb_produtos (nome, marca, categoria, preco, estoque) VALUES 
('Smartphone Galaxy S23', 'Samsung', 'Eletrônicos', 3500.00, 15),
('Notebook Inspiron', 'Dell', 'Informática', 4200.00, 10),
('Fone de Ouvido Bluetooth', 'JBL', 'Acessórios', 299.90, 50),
('Teclado Mecânico RGB', 'Logitech', 'Periféricos', 450.00, 30),
('Monitor 24 Polegadas', 'LG', 'Informática', 890.00, 12),
('Mouse Gamer', 'Razer', 'Periféricos', 180.00, 40),
('Cadeira Gamer', 'DXRacer', 'Móveis', 1200.00, 5),
('Carregador Portátil', 'Anker', 'Acessórios', 150.00, 100);


SELECT * FROM tb_produtos WHERE preco > 500;


SELECT * FROM tb_produtos WHERE preco < 500;


UPDATE tb_produtos SET preco = 3200.00, estoque = 20 WHERE id = 1;

SELECT * FROM tb_produtos WHERE id = 1;