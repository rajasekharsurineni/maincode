var express = require('express');
var app=express();
var file=require('fs');
 
app.get('/index.html',function(req,res){
	res.sendFile( __dirname+"/index.html");
	

});
app.get('/details',function(req,res){
	res.send("username"+req.query.uname+"\n email:"+req.query.email);

});
app.get('/detals',function(req,res){
	 file.readFile('nt.txt',function (err, data)  {
	  if (err) {
	  	console.log("error")}
	  	else
	  	{
	  	res.send(data.toString());
	  }
	});	

});
// app.get(next(req,res){
// 		if (req.query.uname==jelly) {
// 			console.log("sucess");
// 		}
// 	});
var server=app.listen(3034,function(){
	var host=server.address().address
	var port =server.address().address
	console.log("example",host,port)
});