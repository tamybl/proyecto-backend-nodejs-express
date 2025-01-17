-- Active: 1733871723777@@127.0.0.1@5432@db_trekly@public
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4 (),
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL
);

INSERT INTO users (email, password) VALUES ('admin@correo.cl', '$2a$10$z4M8NjUp3Rpo.5RYNDWi0.TLYL7ByoM72aygAIApeX7.TchUqkeoG');
INSERT INTO users (email, password) VALUES ('user1@correo.cl', '$2a$10$soR9z7bJiSN1EvQgD3jLSOuxHkTB7y3FDIJK3AwbHoQFnxSofkYaW');
INSERT INTO users (email, password) VALUES ('user2@correo.cl', '$2a$10$Fh7QsC1L7H5ryW8zdkUuoelstbUVHOJNjkQOEdFG7soGzF8T2P2IO');
INSERT INTO users (email, password) VALUES ('user3@correo.cl', '$2a$10$HdL68n3oUIz9K2lSwyNdkOVU9yfLJ4F5zSkTHbLgFluD6TrkQJcVm');
INSERT INTO users (email, password) VALUES ('developer@correo.cl', '$2a$10$qDFx1HJ2y5JqNLozGYbWruOToUV0PZgKuU9ReK81lOCZJZMOerPgi');
INSERT INTO users (email, password) VALUES ('testuser@mail.com', '$2a$10$WPxUN4gBu5oFZnAs/4xWdeXtVkAKr9ByUb/Q7I12ef6RI0.BO9ZHG');
