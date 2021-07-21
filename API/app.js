const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 5500;

app.get("/", (req, res) => {  //this is callback
    res.send("This is Home Page of my First Express Application");
});
app.get("/api", (req, res) => {           //file encoding to avoid buffer data  
    fs.readFile(`${__dirname}/userapi.json`, "utf-8", (err, data) => {
        // res.send(data);
        const obj = JSON.parse(data); //converted to object
        // res.writeHead(200,{"content-type":"application/json"});
        res.send(obj);
    });
    //OR
    // res.sendFile(path.join(__dirname+'/userapi.json'));
});

app.listen(port, () => {
    console.log(`Application started successfully on port ${port}`);
});