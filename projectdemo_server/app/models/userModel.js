var db = require("../../database.js")
var md5 = require('md5')

exports.login = function(body, callback) {
    var sql = "select * from user where tel = ? and password = ?";
    var params = [body.tel, md5(body.password)]
    var row;
    db.get(sql, params, (err, row) => {
        if (err) {
    		callback(err);
          	return;
        }
        if (row) {
    		callback(null, row);
          	return;
        } else {
    		callback('Not found user');
          	return;
        }
    });
}

exports.get = function(id, callback) {
    var sql = "select * from user"
    var params = []
    if (id) {
        var sql = "select * from user where id = ?"
        var params = [id]
    }

    db.all(sql, params, (err, row) => {
        if (err) {
            callback(err);
            return;
        }

        callback(null, row);
        return;
    });
}

exports.add = function(body, callback) {
    var data = {
        name: body.name,
        tel: body.tel,
        password : md5(body.password),
        address: body.address
    }
    console.log(data)
    var sql ='INSERT INTO user (name, tel, password, address) VALUES (?,?,?,?)'
    var params =[data.name, data.tel, data.password, data.address]
    db.run(sql, params, function (err, row) {
        if (err) {
            callback(err);
            return;
        }
        
        callback(null, row);
        return;
    });
}

exports.update = function(id, body, callback) {
    var data = {
        name: body.name,
        tel: body.tel,
        password : body.password ? md5(body.password) : null
    }
    db.run(
        `UPDATE user set 
           name = COALESCE(?,name), 
           tel = COALESCE(?,tel), 
           password = COALESCE(?,password) 
           WHERE id = ?`,
        [data.name, data.tel, data.password, id], 
        function (err, row) {
        if (err) {
            callback(err);
            return;
        }
        
        callback(null, row);
        return;
    });
}

exports.delete = function(id, callback) {
    db.run(
        'DELETE FROM user WHERE id = ?',
        id,
        function (err, row) {
        if (err) {
            callback(err);
            return;
        }
        
        callback(null, row);
        return;
    });
}