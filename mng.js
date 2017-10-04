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
var Schema1=new mongoose.Schema({
	
	email:String,
	password:String
		
});
var user1=mongoose.model('lgdtls',Schema1);
var user=mongoose.model('emp',Schema);



app.post('/new',function(req,res){
	var imgPath = "F:/node_example/nodejs_example/"+req.body.image ;

var imgData = fs.readFileSync(imgPath);
	new user({
		
		name:req.body.name,
		born:req.body.born,
		age:req.body.age,
		height:req.body.height,
		spouse:req.body.spouse,
		awards:req.body.awards,
		siblings:req.body.siblings,
		parents:req.body.parents,
		data:imgData.toString("base64"),
		contentType:'image/png'
		

	}).save(function(err,doc){
		console.log(doc);
		if (err) res.json(err);
		else res.send('successfully inserted!');
	});
});
app.post('/log',function(req,res){
	
	new user1({
		
		email:req.body.email,
		password:req.body.password 
		
	}).save(function(err,doc){
		console.log(doc);
		if (err) res.json(err);
		else res.send('successfully inserted!');
	});
});
app.post('/login',function(req,res){

	var em=req.body.email;
	var pas=req.body.password;
	 user1.findOne({email:req.body.email},function(err, result) {
  	   if(err){
			res.status(404).send("error");
		     }
		else
		  {
			var email=result.email;
			var pswrd=result.password;
			if (em==email && pas==pswrd) {
				console.log("success")
			}
				else
				{
					console.log("fail")
				} 

			}
			
		
  });
});
app.get('/gets',function(req,res){
  user.find({},function(err, result) {
  	console.log("sdfsf");
    if (err) throw err;
    console.log(err);

    // db.close();
    res.json (result);
  });
});
app.get('/details/:id',function(req,res){
	
	user.findOne({name:req.params.id},function(err,data){
		if(err){
			res.status(404).send("error");
		}
		else
		{
			res.json(data);
		}
	})

});
app.get('/detail/:id',function(req,res){
	
	user.findById(req.params.id,function(err,data){
		if(err){
			res.status(404).send("error");
		}
		else
		{
			console.log(data)
			res.json(data);
		}
	})

});
app.post('/update/:id',function(req,res){
	// {
	// 	name:'dsfsdf',
	// 	age:435
	// }
	console.log(req.body);
	user.update (
    { _id : req.params.id },
    { $set : req.body  },function(err,result){
    	if (err) {
    		console.log(err);
    	}
    	else
    	{
    		res.json(result)
    	}
    })
});
app.get('/update',function(req,res){
 	res.sendFile(__dirname+'/update.html')

 });
app.get('/login',function(req,res){
	res.sendFile(__dirname+'/login.html')

});
app.get('/insert',function(req,res){
	res.sendFile(__dirname+'/insert.html')

});
app.get('/register',function(req,res){
	res.sendFile(__dirname+'/register.html')

});
app.get('/',function(req,res){
	res.sendFile(__dirname+'/in.html')

});