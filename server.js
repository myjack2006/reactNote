var express = require('express');
var app = express();

// 静态文件系统
app.use(express.static(__dirname));

var server = app.listen(8082, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
})