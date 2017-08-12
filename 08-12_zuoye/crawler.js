/**
 * Created by dllo on 17/8/11.
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
                var imgArr = [];
                $("body img").each(function (index, item) {
                    console.log($(item).attr('src'));
                    if ($(item).attr('src').indexOf('http') === -1) {
                        imgArr.push('http://daily.zhihu.com' + $(item).attr('src'));
                    } else {
                        imgArr.push($(item).attr('src'));
                    }
                });
                return imgArr;
            });
            fs.write('./arr.json', content, 'w');
            phantom.exit(0);
        }, 3000);

    } else {
        console.log('失败');
        phantom.exit(0);
    }
});