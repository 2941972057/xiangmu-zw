/**
 * Created by dllo on 17/8/5.
 */
var express = require('express');
var mysql = require('mysql');
var router = express.Router();
function handleError(error, message) {
    if (error) {
        console.log(message + '失败');
        return false;
    } else {
        console.log(message + '成功');
        return true;
    }
}
var options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345',
    database: 'EDG'
};
var pool = mysql.createPool(options);
pool.getConnection(function (error, connection) {
    router.post('/', function (req, res) {
        var select = `select * from user where username='${req.body.username}'`;
        connection.query(select, function (error, results) {
            if (!handleError(error, '查询')) return;
            if (results.length !== 0) {
                if (results[0].username === req.body.username && results[0].password === req.body.password) {
                    res.send('登录成功');
                } else {
                    res.send('登录失败');
                }
            } else {
                res.send('用户名不存在');
            }
        });
    });
});
module.exports = router;