 
var file= require("fs");
file.readdir("D:/nodejs_example",function(err,files){
	if (err) {
		return console.error("err");
	}
	files.forEach(function(fls)
	{
	console.log(fls);	
});

});
/*file.mkdir("D:/nodejs_example/n.js",function(err){
	if (err) {
		return console.error(err);

	}
	console.log("created");
});
/*file.rmdir("D:/nodejs_example/n.js",function(err){
	if (err) {
		return console.error(err);

	}
	console.log("deleted");
});*/