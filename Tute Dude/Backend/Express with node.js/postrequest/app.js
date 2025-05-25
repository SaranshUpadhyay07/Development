const express = require('express');
const bodyParser = require('body-parser');
const app =express();
app.use(express.urlencoded({extende:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/inde.html")
});

app.listen(3000, function(){
    console.log("server started");
})

app.post("/submit",(req,res)=>{
    var n1= Number(req.body.num1); // the num1 is the name and no the id
    var n2 = Number(req.body.num2);
    var result = n1+n2;
    console.log(result);
})
