var http = require("http");
var pagetext = require("./pagetext.js");
console.log(pagetext);
var server = http.createServer();
server.listen(3004,function(err){
	console.log("server lisntening");
});

server.on("request",function(req,res){
	var path = req.url;
	switch(path){
		case "/":
		res.write(pagetext.RootPage);
		res.end();
		break;
		
		case "/home":
		res.write(pagetext.HomePage);
		res.end();
		break;

		default:
		res.write(pagetext.getData());
		res.end();
		break;
	}
})