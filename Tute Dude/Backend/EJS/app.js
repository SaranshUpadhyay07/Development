const express = require('express');
const app = express();

app.set("view engine", "ejs"); // Use EJS templating engine
app.set("views", __dirname + "/views"); // Ensure it finds the views folder

app.get("/", function(req, res) {
    const d = new Date();
    const day = d.getDay();
    const daytext = (day === 0 || day === 6) ? "Weekend" : "Weekday";

    res.render("list", { dayejs: daytext }); // Pass variable to EJS
});

app.listen(3000, function() {
    console.log("Server started on http://localhost:3000");
});
