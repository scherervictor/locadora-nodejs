import mysql from "mysql2/promise"

const connection = mysql.createConnection("mysql://root:admin@localhost:3306/locadora");

export { connection }