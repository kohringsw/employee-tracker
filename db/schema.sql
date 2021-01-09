DROP DATABASE if exists employeeDB;
CREATE DATABASE employeeDB;

USE employeeDB;

DROP TABLE if exists departments;
DROP TABLE if exists roles;
DROP TABLE if exists employees;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary INT NOT NULL,
    departmentID INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    roleID INT NOT NULL,
    managerID INT,
    PRIMARY KEY (id)
);