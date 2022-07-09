const inquirer = require('inquirer');
const connection = require('./config/connection')
require('dotenv').config();

const { 
  startMenu,
  addEmployeePrompt,
  addRolePrompt,
  addDepartmentPrompt,
  updateEmpRolePrompt
} = require('./lib/prompter');

const { 
  viewDepartment,
  viewRoles,
  viewEmployees,
  updateEmployeeRole,
  updateEmployeesManager,
  addDepartment,
  addRole,
  addEmployee
} = require('./lib/queries');

/*

1. Move functions later into handler folder
2. create validators later

*/

// VIEWING TABLES
function handler(argue) {
  connection.query(argue, function (err, result, fields) {
    if (err) {
      throw err
    }
    console.table(result)
    start()
  })
}


// ADDING TO TABLES
function addedEmployee() {
  inquirer.prompt(addEmployeePrompt)
    .then(response => {
      connection.query(addEmployee,
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

function addedRole() {
  inquirer.prompt(addRolePrompt)
    .then(response => {
      connection.query(addRole,
      {
        title: response.title,
        salary: response.salary,
        department_id: response.department,
      },
      function (err) {
        if (err) throw err
      })
      start()
    })
}

function addedDepartment() {
  inquirer.prompt(addDepartmentPrompt)
    .then(response => {
      connection.query(addDepartment,
      {
        name: response.title
      },
      function (err) {
        if (err) throw err
      })
      start()
    })
}

//MODIFYING TABLES
function updateEmpRole() {
  inquirer.prompt(updateEmpRolePrompt)
    .then(response => {
      connection.query
    })
}



/* --------------------------------------------------------------- */
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
          addedDepartment()
          break;

        case 'Add Role':
          addedRole()
          break;

        case 'Add Employee':
          addedEmployee()
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