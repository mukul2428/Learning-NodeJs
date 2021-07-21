const express = require("express");
const path = require("path");
const app = express();


//serve static html

//geting file from other folder
// console.log(path.join(__dirname,"../Basic/Html_Files"));
const staticPath = path.join(__dirname,"../Basic/Html_Files");
app.use(express.static(staticPath));


//sending html
app.get("/", (req, res) => {
    res.write("<h1>This is H1 Heading</h1>");
    res.send();
});

//sending json using object
app.get("/json", (req, res) => {
    //or use res.send
    res.json([{
        id: 1,
        Name: "Mukul",
    },
    {
        id: 2,
        Name: "Manish",
    }]);
});


app.listen(5500, () => {
    console.log(`Application started successfully on port 5500`);
});