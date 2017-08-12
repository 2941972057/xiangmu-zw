/**
 * Created by dllo on 17/8/12.
 */
var fs = require('fs');
var download = require('./download');
fs.readFile('./arr.json', 'utf-8', function (error, data) {
    data.split(',').forEach(function (item, index) {
        if (item.indexOf('.png') > -1) {
            download(item, 'images', index + '.png');
        }
        if (item.indexOf('.jpg') > -1) {
            download(item, 'images', index + '.jpg');
        }
        if (item.indexOf('.gif') > -1) {
            download(item, 'images', index + '.gif');
        }
    })
});