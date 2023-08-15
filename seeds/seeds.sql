

INSERT INTO departments (id, department)
VALUES (1, "Marketing"),
       (2, "Legal"),
       (3, "Sales"),
       (4, "Finance");

INSERT INTO roles (id, title, salary, department_id)
VALUES (1, "Social Media Manager", 30000, 1),
       (2, "Sales Associate", 50000, 3),
       (3, "Chief Financial Officer", 100000, 4),
       (4, "Corporate Counsel", 200000, 2),
       (5, "Finanical Analyst", 80000, 4),
       (6, "Marketing Assistant", 40000, 1),
       (7, "Sales Manager", 40000, 3);


INSERT INTO employees (id, first_name, last_name, manager, title, salary, role_id, department_id)
VALUES (1, "Michael", "Johnson", "Cornelius Andrews", "Social Media Manager", 30000, 1, 1),
       (2, "Tabitha", "Jones", "Andrew Jackson", "Sales Associate", 50000, 2, 3),
       (3, "Bertha", "Michaels", "Jackson Johnson", "Chief Financial Officer", 100000, 3, 4),
       (4, "Joan", "Johnson", "Jack Nickels", "Corporate Counsel", 200000, 4, 2),
       (5, "John", "Johnathon", "Dennis Reynolds", "Finanical Analyst", 80000, 5, 4);
       
