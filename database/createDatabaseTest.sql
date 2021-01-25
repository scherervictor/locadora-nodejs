CREATE SCHEMA IF NOT EXISTS videoStore-test;

CREATE TABLE IF NOT EXISTS movies (
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
	title VARCHAR(300) NOT NULL,
	director VARCHAR(200) NOT NULL,
	quantity INT
);

CREATE TABLE IF NOT EXISTS users (
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(300) NOT NULL,
	email VARCHAR(200) NOT NULL,
	password VARCHAR(200) NOT NULL,
	CONSTRAINT UK_User_Email UNIQUE (email)
);

CREATE TABLE IF NOT EXISTS rentMovies (
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
	movieId BIGINT NOT NULL,
	userId BIGINT NOT NULL,
	CONSTRAINT FK_RentMovies_Movies FOREIGN KEY (movieId) REFERENCES movies(Id),
	CONSTRAINT FK_RentMovies_User FOREIGN KEY (userId) REFERENCES users(Id),
	CONSTRAINT UK_Rent UNIQUE (movieId, userId)
);

INSERT INTO users
(name,
email,
password)
VALUES
("victor",
"victor@scherer.com",
"$2b$10$CNbK7k0HUSqTS4InrnA/SOolidyJWnYPqT9eblBjbHmXfpC8QMG..");

INSERT INTO movies
(title,
director,
quantity)
VALUES
("teste 2",
"director 2",
5);

INSERT INTO movies
(title,
director,
quantity)
VALUES
("teste 3",
"director 3",
5);

INSERT INTO movies
(title,
director,
quantity)
VALUES
("filme",
"director 1",
5);

INSERT INTO movies
(title,
director,
quantity)
VALUES
("teste",
"director",
5);

INSERT INTO rentmovies
(movieId,
userId)
VALUES
(3,
1);

INSERT INTO rentmovies
(movieId,
userId)
VALUES
(2,
1);