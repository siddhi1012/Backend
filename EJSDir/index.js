const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

app.set("views" , path.join(__dirname , "/views"));
app.set("view engine",'ejs'); 

app.get("/",(req,res) =>{
    res.render("home");
});
app.get("/hello",(req,res) =>{
    res.send("Hello World");
});
app.get("/rolldice",(req,res) =>{
    res.render("rolldice.ejs");


});

app.listen(port , () =>{
    console.log(`Listening on port ${port}`);

});