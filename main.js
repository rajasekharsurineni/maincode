  var bodyParser=require('body-parser');
var express=require('express');
var path=require('path');
var mongoose=require('mongoose');
var app=express();
var fs=require('fs');
var server=app.listen(3225,function(){console.log("listening")});
app.set('views',__dirname+'/views');
app.set('view engine','jade');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));
mongoose.connect('mongodb://localhost:27017/empdb',function(err,db){});
var Schema=new mongoose.Schema({
	
	name:String,
	p1:String,
	data1: String,

contentType1: String,
	p2:String,
	p3:String,
	p4:String,
	p5:String,
	p6:String,
	p7:String,
	p8:String,
	p9:String,
	p10:String,
	p11:String,
	p12:String,
	data: String,

contentType: String
});
var Schema1=new mongoose.Schema({
	
	date:String,
	match:String,
	time:String,
	palce:String
		
});
var user1=mongoose.model('mtchdtls',Schema1);
var user2=mongoose.model('emp',Schema);

var user=mongoose.model('team',Schema);



app.post('/team',function(req,res){
	var imgPath = "F:/node_example/nodejs_example/"+req.body.image ;

var imgData = fs.readFileSync(imgPath);
var imgPat = "F:/node_example/nodejs_example/"+req.body.img1;

var imgDat = fs.readFileSync(imgPat);
	new user({
		
		name:req.body.name,
		p1:req.body.p1,
		data1:imgDat.toString("base64"),
		contentType1:'image/png',
		p2:req.body.p2,
		p3:req.body.p3,
		p4:req.body.p4,
		p5:req.body.p5,
		p6:req.body.p6,
		p7:req.body.p7,
		p8:req.body.p8,
		p9:req.body.p9,
		p10:req.body.p10,
		p11:req.body.p11,
		p12:req.body.p12,
		
		data:imgData.toString("base64"),
		contentType:'image/png'
		

	}).save(function(err,doc){
		console.log(doc);
		if (err) res.json(err);
		else res.send('successfully inserted!');
	});
});
app.post('/mtchdtls',function(req,res){
	
	new user1({
		
		date:req.body.date,
		match:req.body.match,
		time:req.body.time,
		palce:req.body.place 
		
	}).save(function(err,doc){
		console.log(doc);
		if (err) res.json(err);
		else res.send('successfully inserted!');
	});
});
// app.post('/log',function(req,res){
	
// 	new user1({
		
// 		email:req.body.email,
// 		password:req.body.password 
		
// 	}).save(function(err,doc){
// 		console.log(doc);
// 		if (err) res.json(err);
// 		else res.send('successfully inserted!');
// 	});
// });
// app.post('/login',function(req,res){

// 	var em=req.body.email;
// 	var pas=req.body.password;
// 	 user1.findOne({email:req.body.email},function(err, result) {
//   	   if(err){
// 			res.status(404).send("error");
// 		     }
// 		else
// 		  {
// 			var email=result.email;
// 			var pswrd=result.password;
// 			if (em==email && pas==pswrd) {
// 				console.log("success")
// 			}
// 				else
// 				{
// 					console.log("fail")
// 				}

// 			}
			
		
//   });
// });
app.get('/teams',function(req,res){
  user.find({},function(err, result) {
  	console.log("sdfsf");
    if (err) throw err;
    console.log(err);

    // db.close();
    res.json (result);
  });
});
app.get('/match',function(req,res){
  user1.find({},function(err, result) {
  	console.log("sdfsf");
    if (err) throw err;
    console.log(err);

    // db.close();
    res.json (result);
  });
});
app.get('/gets',function(req,res){
  user2.find({},function(err, result) {
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

});// app.get('/details/:id',function(req,res){
	
// 	user.findOne({name:req.params.id},function(err,data){
// 		if(err){
// 			res.status(404).send("error");
// 		}
// 		else
// 		{
// 			res.json(data);
// 		}
// 	})

// });
// app.get('/detail/:id',function(req,res){
	
// 	user.findById(req.params.id,function(err,data){
// 		if(err){
// 			res.status(404).send("error");
// 		}
// 		else
// 		{
// 			console.log(data)
// 			res.json(data);
// 		}
// 	})

// });
// app.post('/update/:id',function(req,res){
// 	// {
// 	// 	name:'dsfsdf',
// 	// 	age:435
// 	// }
// 	console.log(req.body);
// 	user.update (
//     { _id : req.params.id },
//     { $set : req.body  },function(err,result){
//     	if (err) {
//     		console.log(err);
//     	}
//     	else
//     	{
//     		res.json(result)
//     	}
//     })
// });
// app.get('/update',function(req,res){
// 	res.sendFile(__dirname+'/update.html')

// });
app.get('/team',function(req,res){
	res.sendFile(__dirname+'/teaminsert.html')

});
app.get('/sdlinsrt',function(req,res){
	res.sendFile(__dirname+'/schedule.html')

});
// app.get('/insert',function(req,res){
// 	res.sendFile(__dirname+'/insert.html')

// });
// app.get('/register',function(req,res){
// 	res.sendFile(__dirname+'/register.html')

// });
// app.get('/in',function(req,res){
// 	res.sendFile(__dirname+'/in.html')

// });
app.get('/',function(req,res){
	res.sendFile(__dirname+'/main.html')

});