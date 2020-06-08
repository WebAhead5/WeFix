BEGIN;

<<<<<<< HEAD
DROP TABLE IF EXISTS users,
cars,
tires,
parts,
reservations CASCADE;
=======
DROP TABLE IF EXISTS users, cars,tires,parts,cart;
>>>>>>> 854c035a76c3089f12a8402bd43c4da518817f4b

CREATE TABLE users (
<<<<<<< HEAD
    user_id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR (15) NOT NULL,
    city VARCHAR(200) NOT NULL,
    zip INTEGER NOT NULL
=======
user_id SERIAL PRIMARY KEY,
fullName VARCHAR(100) UNIQUE NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL ,
password VARCHAR (15) NOT NULL,
zipCode INTEGER NOT NULL,
city VARCHAR (15) NOT NULL
>>>>>>> 4f0d03db8dcb9c92d07c797d8d872e1c1d35bc2a
);

CREATE TABLE cars (
<<<<<<< HEAD
    car_id SERIAL PRIMARY KEY,
    manufacturer VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    make_year INTEGER NOT NULL,
    last_service DATE NOT NULL
=======
car_id SERIAL PRIMARY KEY,
manufacturer VARCHAR(100) NOT NULL,
model VARCHAR(100) NOT NULL,
<<<<<<< HEAD
make_year  INTEGER NOT NULL,
last_service DATE   NOT NULL,
full_name VARCHAR(100) UNIQUE NOT NULL
>>>>>>> 854c035a76c3089f12a8402bd43c4da518817f4b
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

<<<<<<< HEAD
CREATE TABLE reservations(
    reservation_id Serial PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    manufacturer VARCHAR(100) NOT NULL,
    res_date DATE NOT NULL,
    description VARCHAR(100),
    address VARCHAR(100)
);
=======
make_year  VARCHAR(20) NOT NULL,
last_service Date   NOT NULL,
fullName VARCHAR(100) UNIQUE NOT NULL
);


>>>>>>> 4f0d03db8dcb9c92d07c797d8d872e1c1d35bc2a

insert into
    users (full_name, email, password, city, zip)
values
    (
        'amirfahoum',
        'amirfahoum@gmail.com',
        '123456',
        'NAZARETH',
        1110
    );

insert into
    users (full_name, email, password, city, zip)
values
    ('moris', 'moris@gmail.com', '123456', 'haifa', 120);

insert into
    users (full_name, email, password, city, zip)
values
    (
        'mehiar',
        'mehiar@gmail.com',
        '123456',
        'telaviv',
        124
    );

insert into
    cars (manufacturer, model, make_year, last_service)
values
    ('Bmw', 'm3', '2020', '2020-06-16');

insert into
    cars (manufacturer, model, make_year, last_service)
values
    ('seat', 'ibiza', '2020', '2020-08-16');

insert into
    cars (manufacturer, model, make_year, last_service)
values
    ('Mazda', 'mx5', '2020', '2020-09-16');

insert into
    cars (manufacturer, model, make_year, last_service)
values
    ('Volvo', 'c1', '2020', '2020-06-18');

insert into
    tires (
        manufacturer,
        model_name,
        dimentions,
        description,
        working_hours,
        amount
    )
values
    (
        'Maxis',
        'R1',
        '120/115',
        'Maxis one of the top companys',
        1.5,
        2
    );

insert into
    tires (
        manufacturer,
        model_name,
        dimentions,
        description,
        working_hours,
        amount
    )
values
    (
        'Michlin',
        'R1',
        '170/115',
        'Michlin the saffest tire',
        1.5,
        3
    );

insert into
    parts (
        part_name,
        part_serialnumber,
        description,
        working_hours,
        amount
    )
values
    ('Breaks', 1120, 'Breaks comes as a set X2', 2, 1);

insert into
    parts (
        part_name,
        part_serialnumber,
        description,
        working_hours,
        amount
    )
values
    ('HandBreak', 1125, 'Breaks X1', 1.5, 2);

insert into
    reservations (
        full_name,
        manufacturer,
        res_date,
        description,
        address
    )
values
    (
        'Amirfahoum',
        'tires service',
        '2020-10-16',
        'X2 tires Maxis R1 with dimention 120/115',
        'nazareth 110'
    );

COMMIT;
=======
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



<<<<<<< HEAD
COMMIT
>>>>>>> 854c035a76c3089f12a8402bd43c4da518817f4b
=======
COMMIT;
>>>>>>> 4f0d03db8dcb9c92d07c797d8d872e1c1d35bc2a
