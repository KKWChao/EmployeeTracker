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
    message: 'Enter Manager Number'
  }
]


module.exports = {
  startMenu,
  addEmployeePrompt
}