const express = require("express");
const app = express();
const port = 9000;

app.get('/', function(rec, res){
    res.send("Hello world!");
});

app.listen(port, function(){
    console.log(`Example app listening port ${port}!`);
});