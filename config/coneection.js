// Set up MySQL connection.
var mysql = require("mysql");

var connection;
 if(process.env.JAWSDB_URL){
   connection = mysql.createConnection(process.env.JAWSDB_URL)
 }
 else
 connection = mysql.createConnection({
  host: "umabrisfx8afs3ja.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "nmxrfgi164yqxogu",
  password: "tpi4atv1jopc0bxh",
  database: "v10tnuchwfafclrh"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;