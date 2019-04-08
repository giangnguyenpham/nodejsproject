// Create express app
var express = require("express")
var app = express()
var db = require("./database.js")
var md5 = require('md5')
// Import routes
let loginRoute = require("./app/routes/loginRoute")
let userRoute = require("./app/routes/userRoute")

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("view", "./views");
app.listen(9000);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});
// Insert here other API endpoints
app.use("/api/login", loginRoute)
app.use("/api/user", userRoute)

// Root path
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});
