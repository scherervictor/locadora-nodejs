import mysql from "mysql2/promise";
require('dotenv').config();

const connection = mysql.createConnection(process.env.CONN_STRING);
export { connection }