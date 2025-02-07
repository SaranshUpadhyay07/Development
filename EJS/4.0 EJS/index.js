import express from "express";
import ejs from "ejs";

const app =express();
const port = 3000;


app.get("/", (req,res) =>{
    const d = new Date();
    const day = d.getDay();

    let type = "";
    let adv = "Gaand Phadni hai";

    switch(day){
        case 0:type="Sunday";
        case 1:type="Monday";
        case 2:type="Tuesday"; 
        case 3:type="Wednesday";
        case 4:type="Thursday";
        case 5:type="Friday";
        case 6:type="Saturday";
    }

    if(type === "Sunday"|| type ==="Saturday"){
        adv="Mauj karo yaar"
    }
    res.render("index.ejs", 
        {dayType: type,
         advice: adv
        });
});

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});