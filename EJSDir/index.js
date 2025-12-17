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
    let diceVals = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs",{diceVals});
});

// app.get("/ig/:username",(req,res) =>{
//     let followers = ["adam","steve","bob"];
//     let { username } = req.params;
//     console.log(username);
//     res.render("instagram.ejs",{username , followers});

// });

app.get("/ig/:username",(req,res) =>{
    let { username } = req.params;
    const instaData = require("./data.json");
    let data = instaData[username];
    console.log(data);
    res.render("insta.ejs",{data});

});

app.listen(port , () =>{
    console.log(`Listening on port ${port}`);

});