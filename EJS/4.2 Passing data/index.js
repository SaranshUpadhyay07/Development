import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var letters=0;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {numberOfLetters:letters});
});

app.post("/submit", (req, res) => {
  letters = req.body["fName"].length + req.body["lName"].length;
  res.render("index.ejs", {numberOfLetters: letters});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
