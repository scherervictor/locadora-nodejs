import mysql from "mysql2/promise";

const connection = mysql.createConnection(process.env.CONN_STRING);
export { connection }