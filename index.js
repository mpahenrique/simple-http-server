function init(path, port){
	path = path || './',
	port = port || 3000;	
	var http         = require("http")
	,	fileSystem   = require("fs");

	http.createServer(function(request, response){

		console.log(request.method, request.url);

		if(request.url == '/') request.url += "index.html";

		fileSystem.readFile(path + request.url, function(err, fileData){
			var status = err ? 404 : 200;
			response.writeHead(status);
			if(!err){ // Found file
				response.end(fileData);
			} else { // Not found file
				response.end("Not found!");
			}
			console.log(status.toString(), request.url);
		});
	}).listen(port);
}

module.exports = init