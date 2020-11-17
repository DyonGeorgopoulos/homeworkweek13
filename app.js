//Dependencies
const mysql = require("mysql");
let express = require("express");
let exphbs = require("express-handlebars");

let app = express();

let PORT = process.env.PORT || 8080;

//Connect to MySQL database
let connection = mysql.createConnection({
    host: "localhost",
  port: 3306,
  user: "root",
  password: "localpass",
  database: "burgers_db"
});

//Sets handlebars as the defult templating engine
app.engine("handlebars", exphbs({defultLayout: "main"}));
app.set("view engine", "handlebars");

//Shows Database is connected
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

//Shows Server is listening
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });