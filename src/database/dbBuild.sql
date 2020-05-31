BEGIN;

DROP TABLE IF EXISTS bounties CASCADE;

CREATE TABLE user (
user_id SERIAL PRIMARY KEY,
full_name VARCHAR(100) NOT NULL,
email VARCHAR(100) unique NOT NULL ,
password TEXT NOT NULL
);

CREATE TABLE cars (
car_id SERIAL PRIMARY KEY,
manufacturer VARCHAR(100) NOT NULL,
model VARCHAR(100) NOT NULL,
make year INTEGER NOT NULL
);

CREATE TABLE tires(
tire_id SERIAL PRIMARY KEY,
manufacturer VARCHAR(100) NOT NULL,
model_name VARCHAR(100) NOT NULL,
dimentions INTEGER NOT NULL,
description VARCHAR(200) NOT NULL
);

CREATE TABLE parts(
part_id SERIAL PRIMARY KEY,
part_name VARCHAR(100) NOT NULL,
part_serialnumber INTEGER NOT NULL,
description VARCHAR(200) NOT NULL
);

CREATE TABLE reservations(
reservation_id Serial PRIMARY KEY,
full_name VARCHAR(100) NOT NULL,
manufacturer VARCHAR(100) NOT NULL,
date INTEGER NOT NULL,
description VARCHAR(100);
);