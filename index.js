const express = require("express");
const path = require("path")
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true })); // use specially for from data.

// this static is use for read the public file for forntend.
app.use(express.static(path.join(__dirname, 'public'))); // give me the full path of the directory

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("backend is running");
})

app.get("/profile", (req, res) => {
    res.render("index");
})

app.get("/profile/:username", (req, res) => {
    // parrams means je kon route er aghe collon ache.
    req.params.username;
    //res.send("<script src='/javascripts/script.js'></script>");
    res.send(`welcome ${req.params.username}`)
})

app.get("/author/:username/:age", (req, res) => {
    // res.send("hello from new routes");
    res.send(`${req.params.username} age is ${req.params.age} `);
})

app.listen(port, () => {
    console.log(`the is running on port :  ${port}`);
})


