# Frontend Server

Frontend Server is a simple way to create a localhost to respond static files.

Using Simple HTTP Server you can:
  - Configure the path to Simple HTTP Server get the files
  - Configure the host port

### Dependencies

Simple HTTP Server uses 2 default modules in nodeJs:

* [http] - Default HTTP module
* [fs] - Default File System module

### Installation

```sh
$ npm install -g frontend-server
```

### Usage

```sh
fserver path=/path/to/server port=3000
```

* Default port = 3000
* Default path = ./


   [http]: <https://nodejs.org/api/http.html>
   [fs]: <https://nodejs.org/api/fs.html>