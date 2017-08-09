/**
 * Created by dllo on 17/8/9.
 */
var fs = require('fs');
var download = require('./download');
fs.readFile('./arr.json', 'utf-8', function (error, data) {
    data.split(',').forEach(function (item, index) {
        download(item, 'videoImg', index + '.jpg');
    });
});