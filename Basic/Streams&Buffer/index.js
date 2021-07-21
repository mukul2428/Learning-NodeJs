const http = require("http");
const fs = require("fs");

const server = http.createServer();
server.on("request",(req,res)=>{

    const rstream = fs.createReadStream("filetoread.txt");
    rstream.on("data",(chunkdata)=>{
        res.write(chunkdata);
    });
    rstream.on("end",()=>{
        res.end();
    });
    rstream.on("error",()=>{
        res.end("File not Found");
    });

    //OR(using stream pipes)
    rstream.pipe(res);
});
server.listen(5500,'127.0.0.1', ()=>{
    console.log("Listening on port 5500");
});