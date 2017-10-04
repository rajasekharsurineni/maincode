var file=require('fs');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var path=require('path');
var  express = require('express');
var app=express();

var server=app.listen(3214,function(){console.log("listening")});
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
	parents:String
});
var user=mongoose.model('player',Schema);
app.post('/new',function(req,res){
	new user({
		name:req.body.name,
	born:req.body.born,
	age:req.body.age,
	height:req.body.height,
	spouse:req.body.spouse,
	awards:req.body.awards,
	siblings:req.body.siblings,
	parents:req.body.parents
	}).save(function(err,doc){
		console.log(doc);
		if (err) res.json(err);
		else res.send('successfully inserted!');
	});
});
var Schema1=new mongoose.Schema({
	name:String,
	__id:String,
	Image:String
});
var use=mongoose.model('team',Schema1);
app.post('/te',function(req,res){
	new use({
		name:req.body.name,
		__id:req.body.__id,
		Image:req.body.Image
	}).save(function(err,doc){
		console.log(doc);
		if (err)res.json(err);
		else
		res.send('successfully inserted!'); 
	});
});
app.get('/team',function(req,res){
	user.find({},function(err,data){
		if (err) throw err;
    console.log(err);
    
    res.json (data);
	});
});
// app.get('/details/:name',function(req,res){
	
// 	file.readFile(__dirname+"/json/"+req.params.name+ ".json",function(err,data){
// 		if(err){
// 			res.status(404).send("error");
// 		}
// 		else
// 		{
// 			res.json(JSON.parse(data.toString()))
// 		}
// 	})

// });

// app.get('/players',function(req,res){
	
// 	file.readFile(__dirname+"/json/player.json",function(err,data){
// 		if(err){
// 			res.status(404).send("error");
// 		}
// 		else
// 		{
// 			res.json(JSON.parse(data.toString()))
// 		}
// 	})

// });

app.get('/',function(req,res){
	res.sendFile(__dirname+'/temp.html')

});