const mysql2 = require('mysql2')
require('dotenv').config();

const connection = mysql2.createConnection({
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
  }
)

connection.connect((err) => {
  if (err) throw err;
  console.log(`Connected as id ${connection.threadId} \n`);
});

module.exports = connection