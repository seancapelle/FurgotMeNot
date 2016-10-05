### Schema

CREATE DATABASE 'FMN_db';
USE FMN_db;

CREATE TABLE animals
(
	id int NOT NULL AUTO_INCREMENT,
	type_id int NOT NULL,
	breed_id int NOT NULL,
	users_id int NOT NULL,
	animals_name varchar(2000) NOT NULL,
	age INT (11) NOT NULL,
	adopted BOOLEAN DEFAULT false,
	shots BOOLEAN DEFAULT true,
	fixed BOOLEAN DEFAULT true,
	kid friendly BOOLEAN DEFAULT true,
	cat friendly BOOLEAN DEFAULT true,
	dog friendly BOOLEAN DEFAULT true,
	food agressive BOOLEAN DEFAULT false,
	house trained BOOLEAN DEFAULT false,
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	PRIMARY KEY (id)
);

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	users_name varchar(2000) NOT NULL,
	email_address varchar (2000) NOT NULL,
	username varchar (1000) NOT NULL,
	password varchar (1000) NOT NULL,
	address varchar (1000) NOT NULL,
	location varchar (1000) NOT NULL,
	phone INT (11) NOT NULL,
	age INT (11) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE type
(
	id int NOT NULL AUTO_INCREMENT,
	type_name varchar(2000) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE breed
(
id INT NOT NULL AUTO_INCREMENT,
breed_name varchar (200) NOT NULL,
type_id INT NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE adoptions
(
id INT NOT NULL AUTO_INCREMENT,
user_name varchar (200) NOT NULL,
type_id INT NOT NULL,
PRIMARY KEY (id)

);
