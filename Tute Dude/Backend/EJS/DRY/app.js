const express = require('express');
const bodyParser = require('body-parser');

var app = express();
app.set("view engine", "ejs"); // Use EJS templating engine
app.use(bodyParser.urlencoded({extended: true})); // Parse URL-encoded bodies
app.use(express.static("public")); // Serve static files from 'public' directory

app.get("/", function(req,res){
    
    res.render("home");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.listen(3000, function(){
    console.log("Server stated");
})
