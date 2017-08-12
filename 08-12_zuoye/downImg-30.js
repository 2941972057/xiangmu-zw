/**
 * Created by dllo on 17/8/12.
 */
var fs = require('fs');
var download = require('./download');
fs.readFile('./arr1.json', 'utf-8', function (error, data) {
    data.split(',').forEach(function (item, index) {
        download(item, 'image', index + '.jpg');
    })
});