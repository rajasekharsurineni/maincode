
var bodyParser=require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var express=require('express');
var path=require('path');
var mongoose=require('mongoose');
var app=express();
var server=app.listen(3224,function(){console.log("listening")});
app.set('views',__dirname+'/views');
app.set('view engine','jade');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));
mongoose.connect('mongodb://localhost:27017/empdb',function(err,db){
if (err) throw err;
  var myquery = { name: "Mickey" };
  var newvalues = { name: "MickeyValley 345", email: "Canyon 123@1ejk" };
  db.collections("emps").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
