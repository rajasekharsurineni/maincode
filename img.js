var bodyParser=require('body-parser');
var express=require('express');
var path=require('path');
var mongoose=require('mongoose');
var fs=require('fs');
var app=express();
var server=app.listen(3214,function(){console.log("listening")});
app.set('views',__dirname+'/views');
app.set('view engine','jade');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));
mongoose.connect('mongodb://localhost:27017/empdb',function(err,db){});
var Schema = new mongoose.Schema({

name:String,

data: Buffer,

contentType: String


});
var user=mongoose.model('img',Schema);
var imgPath = 'F:/node_example/nodejs_example/dhvn.jpg' ;

var imgData = fs.readFileSync(imgPath);

var Image = new user({data:imgData ,contentType:'image/png'});

Image.save(function(err, image){});
app.get('/gets', function (req, res, next) {

user.findOne({name:req.params.image}, function (err, image) {

if (err) return next(err);

res.contentType(image.contentType);

res.send(image.data);

});

});
// app.get('/details/:name',function(req,res){
	
// 	user.find({},{name:"req.params.name"},function(err,data){
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
	res.sendFile(__dirname+'/z.html')

});