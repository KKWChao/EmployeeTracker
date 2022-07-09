INSERT INTO department(name)
VALUES 
  ('IT'),
  ('Accounting'),
  ('HR'),
  ('Marketing'),
  ('Development'),
  ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
  ('Front End Developer', 80000, 5),
  ('Back End Developer', 120000, 5),
  ('Full Stack Developer', 120000, 5),
  ('IT Specialist', 70000, 1),
  ('Lawyer', 150000, 6),
  ('Marketing Specialist', 90000, 4),
  ('HR Manager', 110000, 3),
  ('Accountant', 80000, 2);

INSERT INTO employee (last_name, first_name, role_id, manager_id)
VALUES
  ('Shanta','Jenn', 3, 1),
  ('Pancratius','Dana', 2, 2),
  ('Amir','Celio', 8, null),
  ('Saburo','Padmini', 3, null),
  ('Nelli','Elsabeth', 6, 2),
  ('Avhust','Erazem', 7, 1),
  ('Tamsen','Aurélio', 1, 4),
  ('Katja','Agata', 5, null),
  ('Isingoma','Emil', 8, null),
  ('Tumelo','Axel', 7, 3);

