BEGIN;

DROP TABLE IF EXISTS users, cars,tires,parts,cart;

CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
fullname VARCHAR(100)  NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL ,
password VARCHAR  NOT NULL,
city VARCHAR(200) NOT NULL,
zip INTEGER NOT NULL
);

CREATE TABLE cars (
car_id SERIAL PRIMARY KEY,
manufacturer VARCHAR(100) NOT NULL,
model VARCHAR(100) NOT NULL,
make_year  VARCHAR(100) NOT NULL,
last_service VARCHAR(100)   NOT NULL,
fullname VARCHAR(100) NOT NULL
);

CREATE TABLE tires(
tire_id SERIAL PRIMARY KEY,
manufacturer VARCHAR(100) NOT NULL,
model_name VARCHAR(100) NOT NULL,
dimentions VARCHAR NOT NULL,
description VARCHAR(200) NOT NULL,
working_hours REAL NOT NULL,
amount INTEGER NOT NULL
);

CREATE TABLE parts(
part_id SERIAL PRIMARY KEY,
part_name VARCHAR(100) NOT NULL,
part_serialnumber INTEGER NOT NULL,
description VARCHAR(200) NOT NULL,
working_hours REAL NOT NULL,
amount INTEGER NOT NULL
);

CREATE TABLE cart(
reservation_id Serial PRIMARY KEY,
email VARCHAR NOT NULL,
company VARCHAR NOT NULL,
measure VARCHAR NOT NULL,
price VARCHAR NOT NULL,
quantity VARCHAR NOT NULL,
department VARCHAR NOT NULL
);





/*
insert into cars ( manufacturer, model, make_year,last_service,full_name) values ('Bmw', 'm3', '2020','2020-06-16','amirfahoum');
insert into cars ( manufacturer, model, make_year,last_service,full_name) values ('seat', 'ibiza', '2020','2020-08-16','moris');
insert into cars ( manufacturer, model, make_year,last_service,full_name) values ('Mazda', 'mx5', '2020','2020-09-16','mehiar');
insert into cars ( manufacturer, model, make_year,last_service,full_name) values ('Volvo', 'c1', '2020','2020-06-18','Jake');



insert into tires ( manufacturer, model_name, dimentions,description,working_hours,amount) values ('Maxis', 'R1', '120/115', 'Maxis one of the top companys',1.5,2);
insert into tires ( manufacturer, model_name, dimentions,description,working_hours,amount) values ('Michlin', 'R1', '170/115', 'Michlin the saffest tire',1.5,3);




insert into parts (part_name,part_serialnumber,description,working_hours,amount) values ('Breaks', 1120, 'Breaks comes as a set X2',2,1);
insert into parts (part_name,part_serialnumber,description,working_hours,amount) values ('HandBreak', 1125, 'Breaks X1',1.5,2);

*/
insert into cart (email, company, measure,price,quantity,department) values ('amirfahoum@gmail.com','michleen','110/112','120','1','tires');
insert into cart (email, company, measure,price,quantity,department) values ('amirfahoum@gmail.com','contio','110/112','120','1','tires');



COMMIT;