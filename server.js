const mysql = require("mysql2");
const cTable = require("console.table");
const inquirer = require("inquirer");
const util = require("util");
require("dotenv").config();

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your MySQL usesrname
  user: "root",
  password: process.env.PASSWORD,
  database: "employeeDB",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("");
  start();
});

// Promisify connection query with util.promisify to allow async to be used
const queryAsync = util.promisify(connection.query).bind(connection);

// Prompt user with choices and switch between functions based on answers
async function start() {
  const answer = await inquirer.prompt({
    name: "select",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View departments",
      "View roles",
      "View employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Delete a department",
      "Delete a role",
      "Delete an employee",
      "Exit",
    ],
  });
  switch (answer.select) {
    case "View departments":
      viewDepartments();
      break;
    case "View roles":
      viewRoles();
      break;
    case "View employees":
      viewEmployees();
      break;
    case "Add a department":
      addDepartment();
      break;
    case "Add a role":
      addRole();
      break;
    case "Add an employee":
      addEmployee();
      break;
    case "Delete a department":
      deleteDepartment();
      break;
    case "Delete a role":
      deleteRole();
      break;
    case "Delete an employee":
      deleteEmployee();
      break;
    case "Exit":
      console.log("");
      connection.end();
      break;
  }
}

// console.table everything in departments table
async function viewDepartments() {
  const sql = await queryAsync("SELECT * FROM departments");
  const departments = [];
  console.log("");
  for (let i of sql) {
    departments.push({ ID: i.id, NAME: i.name });
  }
  console.table(departments);
  start();
}

// console.table everything in roles table
async function viewRoles() {
  const sql = await queryAsync(
    "SELECT roles.id, roles.title, roles.salary, departments.name FROM roles INNER JOIN departments ON roles.departmentID = departments.id"
  );
  const roles = [];
  console.log("");
  for (let i of sql) {
    roles.push({
      ID: i.id,
      TITLE: i.title,
      SALARY: i.salary,
      DEPARTMENT: i.name,
    });
  }
  console.table(roles);
  start();
}

// console.table everything in employees table
async function viewEmployees() {
  const sql = await queryAsync(
    "SELECT e.id, CONCAT(e.firstName, ' ', e.lastName) AS employeeName, roles.title, roles.salary, CONCAT(m.firstName, ' ', m.lastName) AS managerName FROM employees e LEFT JOIN employees m ON m.id = e.managerID INNER JOIN roles ON e.roleID = roles.id"
  );
  const employees = [];
  console.log("");
  for (let i of sql) {
    employees.push({
      ID: i.id,
      NAME: i.employeeName,
      ROLE: i.title,
      SALARY: i.salary,
      MANAGER: i.managerName,
    });
  }
  console.table(employees);
  start();
}

// add new department to departments table

// add new role to roles table

// add new employee to employees table

// delete department from departments table

// delete role from roles table

// delete employee from employees table
