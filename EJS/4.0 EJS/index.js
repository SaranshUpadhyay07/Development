import express from "express";
import ejs from "ejs";

const app =express();
const port = 3000;


app.get("/", (req,res) =>{
    const d = new Date();
    const day = d.getDay();

    let type = "a weekday";
    let adv = "it's time to work hard"

    if(day===0|| day===6){
        let type = "a weekend";
    let adv = "Mauj karo"
    }
    res.render("index.ejs", 
        {dayType: type,
         advice: adv
        });
});

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});