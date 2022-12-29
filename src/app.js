const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const hbs = require("hbs");
const path = require("path");
// Above line is useful when we are hosting our site. It means that if 3000 port is not working then a random port number will be provided.

app.set("view engine", "hbs");
const partialPath = path.join(__dirname, "../views/partials");
hbs.registerPartials(partialPath);

const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

app.get("", (req, res)=>{
    res.render("index");
})

app.get("/weather", (req, res)=>{
    res.render("weather");
})

app.get("*", (req,res)=>{
    res.render("error");
})

app.listen(port);