const express = require("express");
const admin = require("firebase-admin");
const bcrypt = require("bcrypt");
const path = require("path");

let staticPath = path.join(__dirname, "dist");

const app = express()

app.use(express.static(staticPath))

app.get("/", (req, res) => {
  res.sendFile(path.join(staticPath, "home.html"))
})
// route 404 
app.get("/404", (req, res) => {
  res.sendFile(path.join(staticPath, "404.html"))
})
app.use("/", (req, res) => {
  res.redirect('/404')
})

app.listen(3000, () => {
  console.log('listening on port 3000.......');
})