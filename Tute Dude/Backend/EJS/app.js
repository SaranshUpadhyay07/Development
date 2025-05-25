const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.get("/", function(req,res){
    var d = new Date();
    var day = d.getDay();
    
});

app.listen(3000, function(){
    console.log("Server stated");
})