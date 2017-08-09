/**
 * Created by dllo on 17/8/9.
 */
/**
 * Created by dllo on 17/8/9.
 */
var webpage = require('webpage');
var page = webpage.create();
phantom.outputEncoding = 'utf-8';
var fs = require('fs');

page.open('https://www.jd.com/', function (status) {
    if (status === 'success') {
        console.log('成功');
        page.includeJs('https://code.jquery.com/jquery-3.2.1.min.js');
        setTimeout(function () {
            var content = page.evaluate(function () {
                var imgArr = [];
                $('#seckill>.grid_c1 li .sk_item_pic_lk img').each(function (index, item) {
                    if ($(item).attr('src').indexOf(".jpg") !== -1) {
                        imgArr.push('http:' + $(item).attr('src'));
                    }
                });
                return imgArr;
            });
            fs.write('./arr.json', content, 'w');
            console.log(content);
            phantom.exit(0);
        }, 10000);
    } else {
        console.log('失败');
        phantom.exit(0);
    }
});
