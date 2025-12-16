 const express = require("express");
 const app = express();
 console.dir(app);

 let port = 3000;
 app.listen(port, () =>{
     console.log(`app is listen on port ${port} `);
 });
// app.use((req,res) =>{
//     // console.log(req);
//     console.log("Request Received");
//     // res.send("This is basic Response");
//     // JSON Response
//     // res.send({
//     //     name : "Apple",
//     //     color : "Red",
//     // });

//     //HTML Reponse
//     let info = "<h1>Fruits</h1><ul><li>Apple</li><li>Orange</li></ul>";
//     res.send(info);
// });

app.get("/home",(req,res) =>{
    res.send({
        color : "red",
        name : "Apple",
    });
});


