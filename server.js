const express = require("express");
const app = express();
const port = 9000;

app.get('/', function(req, res){
    res.send(`Contestando con una peticion GET`);
});

app.listen(port, function(){
    console.log(`Example app listening port ${port}!`);
});

app.post('/', function(req, res){
    res.send(`Contestando con una peticion POST`);
})

app.put('/', function(req,res){
    res.send(`Constestando con una peticion PUT`);
});

app.delete('/', function(req, res){
    res.send(`Contestando con una peticion DELETE`)
});