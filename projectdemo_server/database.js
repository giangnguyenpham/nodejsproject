var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite" 

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQlite database.')
        db.run(`CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            gender text,
            birthday text,
            address text,
            tel text UNIQUE, 
            password text, 
            CONSTRAINT tel_unique UNIQUE (tel)
            )`,(err) => {
        if (err) {
            // Table already created
        }else{
            // Table just created, creating some rows
            var insert = 'INSERT INTO user (name, tel, password) VALUES (?,?,?)'
            db.run(insert, ["HaNT","0123456789",md5("admin123456")])
            db.run(insert, ["user","0198765432",md5("user123456")])
        }
    })  
    }
})

module.exports = db