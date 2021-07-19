//modules
const fs = require("fs"); //include module of file system

//read a file content
let text = fs.readFileSync("file.txt", "utf-8");
console.log(text); 

//replaced a keyword from our file
text = text.replace("Mukul","Manish");

//add data to a file                  //callback function
fs.appendFile("file.txt","Learning",(err,data)=>{
    if(err){
        console.log("Error Found");
    }
    else{
        console.log("Data appended");
    }
});

//override the content of file
fs.writeFile("file.txt","NodeJS",(err,data)=>{
    if(err){
        console.log("Error");
    }
    else{
        console.log("Data overridden");
    }
});

//new file will be created with our passed text
//synchronous operation
fs.writeFileSync("createdFile", text);


//asynchronous or non-blocking
fs.readFile('file.txt', 'utf-8',(err,data)=>{
    console.log(err + "  "+ data);
});


