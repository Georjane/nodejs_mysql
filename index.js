var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "posgres",
  password: "15oct17jun",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
});