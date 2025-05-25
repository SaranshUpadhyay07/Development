const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.get("/", function(req,res){
    var d = new Date();
    var day = d.getDay();
    if(day==0){
        res.send("Day is sunday");
    }else if(day==1){
        res.send("Day is monday");
    }else if(day==2){
        res.send("Day is Tuesday");
    }else if(day==3){
        res.send("Day is wednesday");
    }else if(day==4){
        res.send("Day is thursday");
    }else if(day==5){
        res.send("Day is friday");
    }else{
        res.send("Day is saturday");
    }
});

app.listen(3000, function(){
    console.log("Server stated");
})