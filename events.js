 var event = require('events');
// console.log(event);
var Emmiter= new event.EventEmitter();
var fs =require('fs');
Emmiter.on('start_read',function(nt){
	console.log("start reading file....");
	fs.readFile (nt,function(err,data){
		if (err) {
			Emmiter.emit('error','from-read');
		}
		else
		{
			console.log("completed reading file..");
			Emmiter.emit('print-content',data);
		}
	});
});
Emmiter.on('print-content',function(data){
	console.log("showing content of file..");
	console.log(data.toString());
	Emmiter.emit('done');
});
Emmiter.on('error',function(type){
	console.log("faced error while"+type);
	Emmiter.emit('done');
});
Emmiter.on('done',function(){
	console.log("ok its done");
});
Emmiter.emit('start_read','nt.txt');