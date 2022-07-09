// start menu
const startMenu = {
  name: 'menu',
  type: 'list',
  message: 'Please select an option to begin:',
  pageSize: 5,
  choices: [
    'View all Departments',
    'View all Roles',
    'View all Employees',
    'Add Department',
    'Add Role',
    'Add Employee',
    'Update employee\'s role',
    'Update employee\'s manager',
    'Quit'
  ]
}

const addEmployeePrompt = [
  {
    name: 'last_name',
    type: 'input',
    message: 'Enter Last Name: '
  },
  {
    name: 'first_name',
    type: 'input',
    message: 'Enter First Name: '
  },
  {
    name: 'role',
    type: 'input',
    message: 'Enter Role Number: '
  },
  {
    name: 'manager',
    type: 'input',
    message: 'Enter Manager Number: '
  }
]

const addRolePrompt = [
  {
    name: 'title',
    type: 'input',
    message: 'Enter Title of Role: '
  },
  {
    name: 'salary',
    type: 'input',
    message: 'Enter Salary Amount: '
  },
  {
    name: 'department',
    type: 'input',
    message: 'Enter Department ID: '
  }
]

const addDepartmentPrompt = 
{
  name: 'title',
  type: 'input',
  message: 'Enter Department Name: '
}

const getIdandNewRole = [
  {
    name: 'employeeId',
    type: 'input',
    message: 'Enter Employee ID'
  },
  {
    name: 'targetRole',
    type: 'input',
    message: 'Enter New Role ID'
  }
]

const getIdandNewManager = [
  {
    name: 'employeeId',
    type: 'input',
    message: 'Enter Employee ID'
  },
  {
    name: 'targetManager',
    type: 'input',
    message: 'Enter New Manager ID'
  }
]

module.exports = {
  startMenu,
  addEmployeePrompt,
  addRolePrompt,
  addDepartmentPrompt,
  getIdandNewRole,
  getIdandNewManager
}