const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
   res.sendFile(__dirname + "/index.html");
});

app.get('/about', (req, res) => {
  res.send('I am Saransh Upadhyay');
});

app.get('/sectioned', (req, res) => {
  res.send('Service offered by us are: nothing rn');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(__dirname);
});
