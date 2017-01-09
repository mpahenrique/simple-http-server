#! /usr/bin/env node
'use strict';

const http       = require('http')
,     fileSystem = require('fs');   

var args   = process.argv.slice(2)
,   config = {};

for(let i = 0, lgt = args.length; i < lgt; i++){
    let parsed = args[i].split('=');
    config[parsed[0]] = parsed[1];
}

config.path = config.path || './',
config.port = config.port || 3000;

http.createServer(function(request, response){

    console.log(request.method, request.url);

    if(request.url == '/') request.url += 'index.html';

    fileSystem.readFile(config.path + request.url, function(err, fileData){
        var status = err ? 404 : 200;
        response.writeHead(status);
        if(!err){ // Found file
            response.end(fileData);
        } else { // Not found file
            response.end('Not found!');
        }
        console.log(status.toString(), request.url);
    });
}).listen(config.port);

console.info('Server running in http://localhost:' + config.port);