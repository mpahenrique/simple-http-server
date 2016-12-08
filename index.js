function init(path, port){
    path = path || './',
    port = port || 3000;    
    var  http       = require("http")
    ,    fileSystem = require("fs");

    http.createServer((request, response) => {

        console.log(request.method, request.url);

        if(request.url == '/') request.url += "index.html";

        fileSystem.readFile(path + request.url, (err, fileData) => {
            var status = err ? 520 : 200; // 520 Unknown Error
            response.writeHead(status);

            console.log(status.toString(), request.url);

            if(!err) return response.end(fileData); // Found file
            response.end("Not found!"); // Not found file or other error
            
        });
    }).listen(port);
}

module.exports = init;