const express = require("express");
const admin = require("firebase-admin");
const bcrypt = require("bcrypt");
const path = require("path");

let staticPath = path.join(__dirname, "dist");

const app = express()

app.use(express.static(staticPath))
// Home Route 
app.get("/", (req, res) => {
  res.sendFile(path.join(staticPath, "home.html"))
})
// Login Route 
app.get("/", (req, res) => {
  res.sendFile(path.join(staticPath, "login.html"))
})


app.listen(3000, () => {
  console.log('listening on port 3000.......');
})