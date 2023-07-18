const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv').config();

app.use(express.static(path.join(__dirname, './public')));

app.get("/register", (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/register.html');
    res.sendFile(htmlPath);
  });
  
 /*  app.get("/signup", function(req, res) {
    let htmlPath = path.resolve(__dirname, './views/signup.html');
    res.sendFile(htmlPath);
  }); */

app.get("/login", (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/login.html');
    res.sendFile(htmlPath);
  });

app.get("/", (req,res) =>{
    let htmlPath = path.resolve(__dirname,'./views/home.html')
    res.sendFile (htmlPath);
    })

app.listen(process.env.PORT, function () {
    console.log("Servidor escuchando en el puerto " + process.env.PORT);
});

