const mysqli = require("mysql2");
const cTable = require("console.table");
const inquirer = require("inquirer");
const util = require("util");
const db = require("db");
require("dotenv").config;

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
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