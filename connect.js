var mysql=require('mysql');
var bodyParser=require('body-parser');
var express=require('express');
// var path=require('path');
// var mongoose=require('mongoose');

var sqlite = require('sqlite3').verbose();  
var app=express();
var fs=require('fs');
var server=app.listen(3224,function(){console.log("listening")});
app.set('views',__dirname+'/views');
//app.set('view engine','jade');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.use(express.static(path.join(__dirname,'public')));

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "jellyglass",
  database: "mydb"
});
  
let db = new sqlite3.Database(':mydb:');

app.post('/new',function(req,res){

  con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!")
var sql = "INSERT INTO player (name,born,age,height,spouse,awards,sibilings,parents ) VALUES ('"+req.body.name+"','"+req.body.born+"',"+req.body.age+","+req.body.height+",'"+req.body.spouse+"','"+req.body.awards+"','"+req.body.sibilings+"','"+req.body.parents+"')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted")
  });
});
});
app.get('/details/name',function(req,res){
	con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM player where name='"+req.params.name+"' ", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});
});
	
	

app.get('/insert',function(req,res){
	res.sendFile(__dirname+'/insert.html')

});

