// Set up MySQL connection.
var mysql = require("mysql");


if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

    var connection = mysql.createConnection({
        host: "l7cup2om0gngra77.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "dp2feb23hvysf7mr",
        password: "j5qgzz2llnkgi2xs",
        database: "qbv67xkza3bkt6w5"
    })
}

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
