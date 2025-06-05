const express = require('express');
const bodyParser = require ('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({extende:true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/api", {
    useNewUrlParser: true
});

const articleSchema = {
    name:String,
    title: String
};

const Article = mongoose.model("items", articleSchema);

// get request
app.get("/articles",function(req,res){
    Article.find({}).then(function(articles) {
        res.send(articles);
    }).catch(function(err) {
        console.log(err);
    });
});

// post request
app.post("/articles",function(req,res){
    const element1 = new Article({
        name: req.body.name,
        title: req.body.title
    });
    element1.save();
});

// delete request
app.delete("/articles",function(req,res){
    Article.deleteMany({}).then(function(articles){
        res.send("Deleted");
    }).catch(function(err){
        console.log(err);
    })
});

// get a particular record
app.get("/articles/:articleName",function(req,res){
    Article.findOne({name: req.params.articleName}).then(function(articles){
        res.send(articles);
    }).catch(function(err){
        console.log(err);
    });
});

// put request
app.put("/articles/:articleName",function(req,res){
    Article.updateOne(
        {name: req.params.articleName},
        { $set: { name: req.body.name, title: req.body.title } }
    ).then(function(articles){
        res.send(articles);
    }).catch(function(err){
        console.log(err);
    });
});

// patch request
app.patch("/articles/:articleName",function(req,res){
    Article.updateOne(
        {name: req.params.articleName},
        {$set: {title:req.body.title}}
    ).then(function(aricles){
        res.send("Success");
    }).catch(function(err){
        console.log(err);
    });
});

// delete a particular request
app.delete("/articles/:articleName",function(req,res){
    Article.deleteOne(
        {name: req.params.articleName}
    ).then(function(articles){
        res.send("Deleted");
    }).catch(function(err){
        console.log(err);
    });
});

app.listen(3000, function(){
    console.log("Server is running ");
});