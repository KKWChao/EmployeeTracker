const inquirer = require('inquirer');
const connection = require('./config/connection')
require('dotenv').config();

const { 
  startMenu,
  addEmployeePrompt
} = require('./lib/prompter');

const { 
  viewDepartment,
  viewRoles,
  viewEmployees,
  updateEmployeeRole,
  updateEmployeesManager,
  addDepartment,
  addRole,
} = require('./lib/queries');


function handler(argue) {
  connection.query(argue, function (err, result, fields) {
    if (err) {
      throw err
    }
    console.table(result)
    start()
  })
}

function addEmployee() {
  inquirer.prompt(addEmployeePrompt)
    .then(response => {
      connection.query(`INSERT INTO employee SET ?`,
      {
        last_name: response.last_name,
        first_name: response.first_name,
        role_id: response.role,
        manager_id: response.manager
      },
      function (err) {
        if (err) throw err
      })
      start()
    })
}


console.log(`
============================================= 
|                                             |
|                                             |
|              Employee Tracker               |
|                                             |
|                                             |
=============================================
`)

const start = async () => {
  await inquirer.prompt(startMenu)
    .then((response) => {
      switch (response.menu) {
          
        case 'View all Departments':
          handler(viewDepartment);
          break

        case 'View all Roles':
          handler(viewRoles);
          break;

        case 'View all Employees':
          handler(viewEmployees);
          break;

        case 'Add Department':
          handler(addDepartment)
          break;

        case 'Add Role':
          handler(addRole)
          break;

        case 'Add Employee':
          addEmployee()
          break;

        case 'Update employee\'s role':
          handler(updateEmployeeRole)
          break;

        case 'Update employee\'s manager':
          handler(updateEmployeesManager)
          break;

        // case 'Remove a department':
        //   removeADepartment();
        //   break;

        // case 'Remove a role':
        //   removeARole();
        //   break;

        // case 'Remove an employee':
        //   removeAnEmployee();
        //   break;

        case 'Quit':
          connection.end();
          console.log('\n GoodBye! \n');
          break;

        default:
          break;       
      }
    })
  return
}

start()