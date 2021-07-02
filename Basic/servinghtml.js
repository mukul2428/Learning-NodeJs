const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync('example.html');

//this is server
const server = http.createServer((req, res)=>{ //this is callback
    res.writeHead(200, {'Content-type':'text/html'});
    res.end(fileContent);
});
//server listen in port 80
server.listen(80,'127.0.0.1', ()=>{
    console.log("Listening on port 80");
});