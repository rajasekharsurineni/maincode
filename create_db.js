var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "jellyglass",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("DROP  TABLE player ", function (err, result) {
    if (err) throw err;
    console.log("Database updated");
  });
});

