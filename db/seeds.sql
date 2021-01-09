USE employeeDB;

INSERT INTO departments (name)
VALUES 
('Management'), 
('Sales'), 
('Accounting'), 
('Human Resources'),
('Logistics'),
('Quality Assurance'),
('Customer Relations'),
('Supplier Relations');

INSERT INTO roles (title, salary, departmentID)
VALUES 
('Regional Manager', 120000, 1),
('Sales Manager', 105000, 2),
('Sales Rep', 95000, 2),
('Accounting Manager', 105000, 3),
('Accountant', 95000, 3),
('HR Manager', 85000, 4),
('Shipping Manager', 80000, 5),
('Quality Assurance', 80000, 6),
('Customer Relations', 80000, 7),
('Receptionist', 60000, 7),
('Supplier Relations', 80000, 8);

INSERT INTO employees (firstName, lastName, roleID)
VALUES 
('Michael', 'Scott', 1),
('Jim', 'Halpert', 2),
('Angela', 'Martin', 4),
('Toby', 'Flenderson', 6),
('Darryl', 'Philbin', 7);

INSERT INTO employees (firstName, lastName, roleID, managerID)
VALUES
('Pam', 'Beesly', 10, 1),
('Dwight', 'Schrute', 3, 2),
('Andy', 'Bernard', 3, 2),
('Phyllis', 'Vance', 3, 2),
('Kevin', 'Malone', 5, 3),
('Oscar', 'Martinez', 5, 3),
('Creed', 'Bratton', 8, 4),
('Kelly', 'Kapoor', 9, 4),
('Meredith', 'Palmer', 11, 4);

