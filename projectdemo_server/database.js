var sqlite3 = require('sqlite3').verbose();
var md5 = require('md5');

const DBSOURCE = "db.sqlite" ;

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message);
      throw err;
    }else{
        console.log('Connected to the SQlite database.')
        db.run(`CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            tel text UNIQUE, 
            password text, 
            role text,
            CONSTRAINT tel_unique UNIQUE (tel)
            )`,
            `CREATE TABLE products (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name text, 
                quantity int, 
                description text, 
                price real
                )`,
            (err) => {
        if (err) {
            // Table already created
        }else{
            // Table just created, creating some rows
            var insertUser = 'INSERT INTO user (name, tel, password) VALUES (?,?,?)';
            db.run(insertUser, ["HaNT","0123456789",md5("admin123456")]);
            db.run(insertUser, ["user","0198765432",md5("user123456")]);

            var insertProduct = 'INSERT INTO products (name, quantity, description, price) VALUES (?,?,?,?)';
            db.run(insertProduct, ["Iphone XS",10,"Iphone XS black",1000000]);
            db.run(insertProduct, ["MacBook",10,"MacBook pro",4000000]);
            }
        })   
    }
})

module.exports = db;