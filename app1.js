var file=require('fs');
file.readdir("D:/nodejs_example",function(err,files){
	if (err) {
		return console.error("err");
	}
	
files.readFile (nt,function(err,data){
		if (err) {
			console.log('error','from-read');
		}
		else
		{
			console.log("completed reading file..",data);
			
		}
	});

});
