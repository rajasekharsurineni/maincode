var file=require('fs');
var  express = require('express');
var router=express.Router();
var app=express();
var server=app.listen(3213,function(){console.log("listening")});
// var data=file.readFileSync('parts.json');
// var words=JSON.parse(data);
app.get('/details',function(req,res){
	// res.send(words);
	file.readFile('parts.json',function(err,data){
		if(err){
			res.status(404).send("error");
		}
		else
		{
			// res.setHeader("Content-type","application/json");
			res.send(data);
		}
	})

});
app.get('/add/:parts/:qty?',function(req,res){
	var data=req.params;
	var word=data.parts;
	var quantity=Number(data.qty);
	var reply;
	if(!quantity)
	{
		reply={msg:"require"}
	}
		else
		{
			words[word]=quantity;
			var data=JSON.stringify(words);
			file.writeFile('parts.json',data,finished);
			function finished(err)
			{
				console.log("all set..");
			}
			reply={msg:"thank you"}
		}
		res.send(reply);
	
});
app.get('/',function(req,res){
	res.sendFile(__dirname+'/details.html')

});