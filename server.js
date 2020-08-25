const express = require("express");

const app = express();

app.use(express.static(__dirname + "/dist"));

app.listen(3000, (res) => {
  console.log("The server starts at port: 3000.");
});
