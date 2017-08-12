/**
 * Created by dllo on 17/8/12.
 */
var page = require('webpage').create();
var fs = require('fs');
phantom.outputEncoding = 'utf-8';
page.onConsoleMessage = function (msg, lineNum, soucreId) {
    console.log('consloe:' + msg);

};
page.open('http://daily.zhihu.com/', function (status) {
    if (status === 'success') {
        page.includeJs('https://code.jquery.com/jquery-3.2.1.min.js');
        setTimeout(function () {
            var content = page.evaluate(function () {
                var image = [];
                $(".main-content .box .preview-image").each(function (index, item) {
                    image.push($(item).attr('src'));
                });
                return image;
            });
            fs.write('./arr1.json', content, 'w');
            phantom.exit(0);
        }, 3000);

    } else {
        console.log('失败');
        phantom.exit(0);
    }
});