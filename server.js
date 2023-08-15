const express = require('express');
const path = require('path');
const inquirer = require('inquirer');
const mysql = require('mysql2');

const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'annelise38',
    database: 'employeetracker_db'
  },
  console.log(`Connected to the employeetracker_db database.`)
);

inquirer
  .prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role'],
      name: 'question'
    }
  ])
  .then((response) => {
    if(response.question == 'View All Departments'){
      viewallDepartments();
   } else if (response.question == 'View All Roles'){
      viewallRoles();
   } else if (response.question == 'View All Employees'){
    viewallEmployees();
   } else if (response.question == 'Add a Department'){
      addDepartment();
   } else if (response.question == 'Add a Role'){
      addRole();
   }
  
})

function viewallDepartments(){
  db.connect(function(err) {
    if (err) return err;
    db.query("SELECT * FROM departments", function (err, result){
      if (err) return err;
      console.table(result);
    })
  })
};

function viewallRoles(){
  db.connect(function(err) {
    if (err) return err;
    db.query("SELECT * FROM roles", function (err, result){
      if (err) return err;
      console.table(result);
    })
  })
};

function viewallEmployees(){
  db.connect(function(err) {
    if (err) return err;
    db.query("SELECT * FROM employees", function (err, result){
      if (err) return err;
      console.table(result);
    })
  })
};

function addDepartment(){

  inquirer.prompt([{
    type: 'text',
    message: 'What is the department name?',
    name: 'depName',
   }]) 

   .then((response) => {

    db.connect(function(err) {
      if (err) return err;
      var sql = `INSERT INTO departments (department) VALUES ("${response.depName}")`
      db.query(sql, function (err, result){
        if (err) return err;
        console.log("Data added!");
      })
    })

   });
};

function addRole(){

  inquirer.prompt([
    {
      type: "text",
      message: "What is the name of the job title?",
      name: "title"
    },
    {
      type: "text",
      message: "What is the salary of this role? (No commas)",
      name: "salary"
    },
    {
      type: "text",
      message: "What is the department ID of this role? (Numbers only)",
      name: "depID"
    },
  ])
  .then((response) => {

    db.connect(function(err) {
      if (err) return err;
      var sql = `INSERT INTO roles (title, salary, department_id) VALUES ("${response.title}", "${response.salary}", "${response.depID}")`
      db.query(sql, function (err, result){
        if (err) return err;
        console.log("Data added!");
      })
    })

  })
}

app.listen(PORT, () =>
  console.log(`listening at localhost:${PORT}`)
);
