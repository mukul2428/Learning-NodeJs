//modules
const fs = require("fs"); //include module of file system
//read a file content
let text = fs.readFileSync("file.txt", "utf-8");
console.log(text); 
//replaced a keyword from our file
text = text.replace("Mukul","Manish");
//new file will be created with our passed text
fs.writeFileSync("createdFile", text);


//asynchronous or non blocking
fs.readFile('fil.txt', 'utf-8',(err,data)=>{
    console.log(err + "  "+ data);
});


