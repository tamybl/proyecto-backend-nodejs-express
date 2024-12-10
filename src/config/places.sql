-- Active: 1733624620674@@127.0.0.1@5432@db_trekly@public
DROP TABLE IF EXISTS places;

CREATE TABLE places (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    country VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image TEXT NOT NULL
);

INSERT INTO places (id, name, country, description, image) VALUES
(1, 'Machu Picchu', 'Perú', 'Una de las siete maravillas del mundo, ubicada en los Andes peruanos.', 'https://example.com/images/machu-picchu.jpg'),
(2, 'Torre Eiffel', 'Francia', 'Famosa torre ubicada en París, conocida por su arquitectura única.', 'https://example.com/images/eiffel-tower.jpg'),
(3, 'Gran Muralla China', 'China', 'Antigua muralla que recorre miles de kilómetros en China.', 'https://example.com/images/great-wall.jpg'),
(4, 'Estatua de la Libertad', 'Estados Unidos', 'Monumento icónico en Nueva York, símbolo de libertad y democracia.', 'https://example.com/images/statue-of-liberty.jpg'),
(5, 'Taj Mahal', 'India', 'Impresionante mausoleo de mármol blanco construido en Agra.', 'https://example.com/images/taj-mahal.jpg'),
(6, 'Cataratas del Iguazú', 'Argentina/Brasil', 'Espectacular conjunto de cascadas situado en la frontera entre Argentina y Brasil.', 'https://example.com/images/iguazu-falls.jpg'),
(7, 'Coliseo Romano', 'Italia', 'Anfiteatro histórico en Roma, conocido por los antiguos combates de gladiadores.', 'https://example.com/images/colosseum.jpg'),
(8, 'Pirámides de Giza', 'Egipto', 'Antiguas pirámides situadas cerca de El Cairo, reconocidas como maravillas del mundo antiguo.', 'https://example.com/images/pyramids-giza.jpg');
