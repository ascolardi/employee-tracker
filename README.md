# employee-tracker

# User Story

AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

# Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

# Installation Instructions

Using NodeJS, install Inquirer and Mysql2. Create database called employeetracker_db and seed with data in 'seeds' folder. Select and use employeetracker_db;. Initiate by entering "node server.js" in terminal.

# Deployed Link

https://ascolardi.github.io/employee-tracker/

# Screenshot

<img width="418" alt="Screenshot 2023-08-14 at 10 26 03 PM" src="https://github.com/ascolardi/employee-tracker/assets/133730772/3b1a13a4-d29a-4d27-9299-8a06167f911d">
