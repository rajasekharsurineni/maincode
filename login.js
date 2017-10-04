var bodyParser=require('body-parser');
var express=require('express');
var path=require('path');
var mongoose=require('mongoose');
var app=express();
var fs=require('fs');
var server=app.listen(3224,function(){console.log("listening")});
app.set('views',__dirname+'/views');
app.set('view engine','jade');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));
mongoose.connect('mongodb://localhost:27017/empdb',function(err,db){});
var Schema=new mongoose.Schema({
	
	name:String,
	born:String,
		age:Number,
		height:Number,
		spouse:String,
		awards:String,
		siblings:String,
		parents:String,
	
	data: String,

contentType: String
});
app.get("/login",function(req,res){
	res.sendFile(__dirname+"/login.html")
})
// app.get('/login ',function(req,res){
// 	res.sendFile(__dirname+'/login.html')

// });
var user=mongoose.model('emp',Schema);


app.get('/find',function(req,res){
  user.findOne({name:req.query.name},{name:1,_id:0},function(err, result) {
  	if(err){
			res.status(404).send("error");
		}
		else
		{
			res.json(result);
		}
  });
});
