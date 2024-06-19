const express = require("express");
const path = require("path");
const app = express();
const port = 3001;

console.log("Stacey is fucking hott");

// HTML or View routes
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact.html"));
});

// api routes
const stuff = require("./data/stuff.json"); // path for imported data
app.get("/getstuff", (req, res) => {
const q = req.query.name
const result_of_q_filtered = stuff.filter(something => something.name === q)
res.json(result_of_q_filtered)
});



app.listen(port, () => {
  console.log(`Express running on http://localhost:${port}`);
});
