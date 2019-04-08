// Create express app
var express = require("express")
var app = express()
var db = require("./database.js")
var md5 = require('md5')

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
// Post login 
app.post("/api/login", (req, res, next) => {
    var sql = "select * from user where tel = ? and password = ?";
    var params = [req.body.tel, md5(req.body.password)]
    var row;
    db.get(sql, params, (err, row) => {
        this.row = row
        console.log(row);
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        if (row) {
            res.json({
                "message": "success",
                "data": row
            })
        } else {
            res.status(400).json({"error": 'Not found user'});
        }
      });
      console.log(row);
});

// GET all
app.get("/api/users", (req, res, next) => {
    var sql = "select * from user"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});
// GET user by ID
app.get("/api/user/:id", (req, res, next) => {
    var sql = "select * from user where id = ?"
    var params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":row
        })
      });
});
// POST all
app.post("/api/user/", (req, res, next) => {    
    var errors=[]
    if (!req.body.password){
        errors.push("No password specified");
    }
    if (!req.body.tel){
        errors.push("No tel specified");
    }
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
    var data = {
        name: req.body.name,
        tel: req.body.tel,
        password : md5(req.body.password),
        address: req.body.address
    }
    console.log(data)
    var sql ='INSERT INTO user (name, tel, password, address) VALUES (?,?,?,?)'
    var params =[data.name, data.tel, data.password, data.address]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id" : this.lastID
        })
    });
})
// PATCH user by ID
app.patch("/api/user/:id", (req, res, next) => {
    var data = {
        name: req.body.name,
        tel: req.body.tel,
        password : req.body.password ? md5(req.body.password) : null
    }
    db.run(
        `UPDATE user set 
           name = COALESCE(?,name), 
           tel = COALESCE(?,tel), 
           password = COALESCE(?,password) 
           WHERE id = ?`,
        [data.name, data.tel, data.password, req.params.id],
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({
                message: "success",
                data: data,
                changes: this.changes
            })
    });
})
// DELETE user by ID
app.delete("/api/user/:id", (req, res, next) => {
    db.run(
        'DELETE FROM user WHERE id = ?',
        req.params.id,
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"deleted", changes: this.changes})
    });
})
// Root path
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});
