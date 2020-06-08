BEGIN;

DROP TABLE IF EXISTS users, cars,tires,parts,cart;

CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
fullName VARCHAR(100) UNIQUE NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL ,
password VARCHAR (15) NOT NULL,
zipCode INTEGER NOT NULL,
city VARCHAR (15) NOT NULL
);

CREATE TABLE cars (
car_id SERIAL PRIMARY KEY,
manufacturer VARCHAR(100) NOT NULL,
model VARCHAR(100) NOT NULL,
make_year  VARCHAR(20) NOT NULL,
last_service Date   NOT NULL,
fullName VARCHAR(100) UNIQUE NOT NULL
);



CREATE TABLE cart(
reservation_id Serial PRIMARY KEY,
item VARCHAR(100) NOT NULL,
quantity INTEGER NOT NULL,
price INTEGER NOT NULL,
department INTEGER NOT NULL,
fullName VARCHAR NOT NULL,
dateCart  INTEGER NOT NULL
);



insert into users (fullName, email, password,zipCode,city) values ('amirfahoum', 'amirfahoum@gmail.com', '123456',11110,'haifastreet');


insert into cars ( manufacturer, model, make_year,last_service,fullName) values ('Bmw', 'm3', '2020','2020-06-16','amirfahoum');
insert into cars ( manufacturer, model, make_year,last_service,fullName) values ('seat', 'ibiza', '2020','2020-08-16','moris');
insert into cars ( manufacturer, model, make_year,last_service,fullName) values ('Mazda', 'mx5', '2020','2020-09-16','mehiar');
insert into cars ( manufacturer, model, make_year,last_service,fullName) values ('Volvo', 'c1', '2020','2020-06-18','Jake');


insert into cart (item, quantity, price,department,fullName,dateCart) values ('Breaks',2,200,110,'am3rrr2','12.03.2020');
insert into cart (item, quantity, price,department,fullName,dateCart) values ('HANDBREAKS',1,300,112,'am3rrr','10.05.2020');



COMMIT;