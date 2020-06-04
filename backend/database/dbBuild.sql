BEGIN;

DROP TABLE IF EXISTS users,
cars,
tires,
parts,
reservations CASCADE;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR (15) NOT NULL,
    city VARCHAR(200) NOT NULL,
    zip INTEGER NOT NULL
);

CREATE TABLE cars (
    car_id SERIAL PRIMARY KEY,
    manufacturer VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    make_year INTEGER NOT NULL,
    last_service DATE NOT NULL
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

CREATE TABLE reservations(
    reservation_id Serial PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    manufacturer VARCHAR(100) NOT NULL,
    res_date DATE NOT NULL,
    description VARCHAR(100),
    address VARCHAR(100)
);

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