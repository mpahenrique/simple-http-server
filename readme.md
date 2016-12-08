# Simple HTTP Server

Simple HTTP Server is a simple way to create a localhost to respond static files.

Using Simple HTTP Server you can:
  - Configure the path to Simple HTTP Server get the files
  - Configure the host port

### Dependencies

Simple HTTP Server uses 2 default modules in nodeJs:

* [http] - Default HTTP module
* [fs] - Default File System module

### Installation

Simple HTTP Server requires [Node.js](https://nodejs.org/) to run.
###### Using in a node project

```sh
$ npm install https://github.com/mpahenrique/simple-http-server --save-dev
```
###### Using in a basic project

```sh
$ git clone https://github.com/mpahenrique/simple-http-server
```


### Usage

```js
simpleHTTPServer(path, port);
```

* Default port = 3000
* Default path = ./

###### Using directly

```sh
$ node
> require('./simple-http-server')('/path/to/your/base/directory', 3000);
```
###### Using like a module

```js
var simpleHTTPServer = require('simple-http-server')(__dirname, 1234);
```


   [http]: <https://nodejs.org/api/http.html>
   [fs]: <https://nodejs.org/api/fs.html>