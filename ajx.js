var express=require('express');
var bodyParser=require('body-parser');
var fs=require('fs');
var app=express();
var server=app.listen(3221,function() {
	console.log("listenig");
})
app.get('/hello',function(req,res){
	res.send("hello world");
});
app.get('/',function(req,res){
	res.sendFile(__dirname+'tea.html');
});