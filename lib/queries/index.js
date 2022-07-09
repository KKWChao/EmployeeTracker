const viewDepartment = 
  `SELECT * 
  FROM department;`

const viewRoles = 
  `SELECT * 
  FROM role;`

const viewEmployees =  
`SELECT 
  employee.first_name, 
  employee.last_name, 
  role.title, 
  role.salary, 
  department.name, 
  CONCAT(employee.first_name, ' ' ,employee.last_name) AS manager 
  FROM employee 
  INNER JOIN role on role.id = employee.role_id 
  INNER JOIN department on department.id = role.department_id 
  LEFT JOIN employee e on employee.manager_id = e.id;`

const updateEmployeeRole = ''

const updateEmployeesManager = ''

const addDepartment = 
  'INSERT INTO department set ?'

const addRole = 
  'INSERT INTO role SET ?'

const addEmployee = 
  'INSERT INTO employee SET ?'



module.exports = { 
  viewDepartment,
  viewRoles,
  viewEmployees,
  updateEmployeeRole,
  updateEmployeesManager,
  addDepartment,
  addRole,
  addEmployee
}