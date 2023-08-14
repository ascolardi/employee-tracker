DROP DATABASE IF EXISTS employeetracker_db;
CREATE DATABASE employeetracker_db;

USE employeetracker_db;


CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT,
  department VARCHAR (30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR (50) NOT NULL,
  salary INT NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES departments (id)
);


CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR (20) NOT NULL,
  last_name VARCHAR (30) NOT NULL,
  manager VARCHAR (50),
  title VARCHAR (50),
  salary INT NOT NULL,
  role_id INT NOT NULL,
  department_id INT NOT NULL,
  FOREIGN KEY (role_id) REFERENCES roles (id),
  FOREIGN KEY (department_id) REFERENCES departments (id),
  PRIMARY KEY (id)
);
