import mysql from "mysql2";

let connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "data_do_an",
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
});

// let connection = conn.promise();

export default connection;
