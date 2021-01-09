const mysqli = require("mysql2");
const cTable = require("console.table");
const inquirer = require("inquirer");
const util = require("util");
const db = require("db");
require("dotenv").config;

const connection = mysql.createConnection({
  host: "localhost",
  port: 3001,
  // Your MySQL usesrname
  user: "root",
  password: process.env.PASSWORD,
  database: "employee_tracker",
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
    message: "What would you like to do? (use arrow keys)",
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
      "Update a salary",
      "Update an employee role",
      "Update a manager of an employee",
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
    case "Update a salary":
      updateSalary();
      break;
    case "Update an employee role":
      updateRole();
      break;
    case "Update a manager of an employee":
      updateManager();
      break;
    case "Exit":
      console.log('');
      connection.end();
      break;
  }
};

