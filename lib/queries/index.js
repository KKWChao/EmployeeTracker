const viewDepartment = 
  `SELECT * 
  FROM department;`

const viewRoles = 
  `SELECT * 
  FROM role;`

const viewEmployees =  
  `SELECT 
    employee.id, 
    employee.first_name, 
    employee.last_name, 
    role.title, 
    department.name AS department, 
    role.salary, 
    CONCAT(manager.first_name, ' ', manager.last_name) AS manager
  FROM employee
  LEFT JOIN employee manager on manager.id = employee.manager_id
  INNER JOIN role ON (role.id = employee.role_id)
  INNER JOIN department ON (department.id = role.department_id)
  ORDER BY id ASC
  `


  
const updateEmployeeRole = 
  `UPDATE employee 
  SET role_id = ? 
  WHERE id = ?`

const updateEmployeeManager = 
  `UPDATE employee 
  SET manager_id = ? 
  WHERE id = ?`

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
  updateEmployeeManager,
  addDepartment,
  addRole,
  addEmployee
}