var sqlite=require('sqlite3').verbose();
var mysql=require('mysql');
let db = new sqlite.Database(':mydb:', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});