
CREATE DATABASE db_generation_game_online;
USE db_generation_game_online;


CREATE TABLE tb_classes (
    id BIGINT AUTO_INCREMENT,
    nome_classe VARCHAR(255) NOT NULL,
    habilidade_principal VARCHAR(255),
    PRIMARY KEY (id)
);


INSERT INTO tb_classes (nome_classe, habilidade_principal) VALUES 
("Guerreiro", "Força Bruta"),
("Mago", "Magia Arcana"),
("Arqueiro", "Precisão"),
("Assassino", "Furtividade"),
("Paladino", "Luz Sagrada");

-- 4. Criação da Tabela de Personagens (Equivalente a tb_produtos)
CREATE TABLE tb_personagens (
    id BIGINT AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    nivel INT,
    ataque INT,
    defesa INT,
    classeid BIGINT,
    PRIMARY KEY (id)
);


ALTER TABLE tb_personagens ADD CONSTRAINT fk_personagens_classes
FOREIGN KEY (classeid) REFERENCES tb_classes(id);


INSERT INTO tb_personagens (nome, nivel, ataque, defesa, classeid) VALUES 
("Arthur", 50, 2500, 1500, 1),
("Morgana", 60, 3000, 800, 2),
("Legolas", 45, 2200, 1100, 3),
("Cassian", 55, 2800, 900, 4),
("Galahad", 70, 1800, 2500, 5),
("Catriel", 30, 1500, 1300, 3),
("Cedric", 35, 1900, 1800, 1),
("Luna", 42, 2100, 1100, 2);


SELECT * FROM tb_personagens WHERE ataque > 2000;


SELECT * FROM tb_personagens WHERE defesa BETWEEN 1000 AND 2000;


SELECT * FROM tb_personagens WHERE nome LIKE "%C%";


SELECT * FROM tb_personagens 
INNER JOIN tb_classes ON tb_personagens.classeid = tb_classes.id;


SELECT * FROM tb_personagens 
INNER JOIN tb_classes ON tb_personagens.classeid = tb_classes.id
WHERE tb_classes.nome_classe = "Mago";

SELECT * FROM tb_personagens ORDER BY nivel DESC;

SELECT AVG(ataque) AS Media_Ataque FROM tb_personagens;