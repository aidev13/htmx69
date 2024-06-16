const express = require("express");
const path = require("path");
const app = express();
const port = 3001;

console.log("Stacey is fucking hott")

// HTML or View routes
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact.html"));
});

// api routes
const pets = require('./data/pets.json') // path for imported data
app.get('/api/search-pets', (req, res) => {
   res.json(pets)
})

app.listen(port, () => {
  console.log(`Express running on http://localhost:${port}`);
});
