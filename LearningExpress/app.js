const express = require("express"); //import express module
const path = require("path"); //import path module

const app = express(); //initialize app
const port = 80;

//For serving static files
app.use('/static', express.static('static'));



//PUG TEMPLATE STUFF
//set the template engine as pug
app.set('view engine', 'pug');
//set the views directory
app.set('views', path.join(__dirname, 'views'));
//Our pug demo endpoint
app.get("/demo", (req,res)=>{
    //sending data to pug template to render
    res.status(200).render('demo', { title: 'Hey Mukul Raghav', message: 'Hello there! This is First Pug Template' });
});
app.get('/',(req,res)=>{
    const con = "This is Demo for Pug Template"
    res.status(200).render('index.pug', {title: 'Hey! Mukul Raghav', con});
});



app.get("/home", (req,res)=>{  //this is callback
    res.send("This is Home Page of my First Express Application");
});
app.post("/home", (req,res)=>{ 
    res.send("This is Post Request of Home Page of my First Express Application");
});
app.get("/about", (req,res)=>{
    res.send("This is About Page of my First Express Application");
});
app.get("/contact", (req,res)=>{ 
    res.send("This is Contact Page of my First Express Application");
});
app.get("/services", (req,res)=>{
    res.send("This is Service Page of my First Express Application");
});
app.get("/" ,(req,res)=>{
    res.status(404).send("This page is not found");
});


app.listen(port, ()=>{
    console.log(`Application started successfully on port ${port}`);
});