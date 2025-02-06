import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    // console.log(req.rawHeaders);
    res.send("<h1>Yohooo</h1>");
});

app.get("/about", (req, res) =>{
    res.send("About ME");
});

app.get("/contact", (req, res)=>{
    res.send("Contact Me");
});

app.listen(port, () => {
    console.log(`Server is working on port ${port}`);
});