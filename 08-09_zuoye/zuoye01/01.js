/**
 * Created by dllo on 17/8/9.
 */
var webpage = require('webpage');
var fs = require('fs');
var page = webpage.create();
phantom.outputEncoding = 'utf-8';
page.open('http://www.douban.com/', function (status) {
    if (status === 'success') {
        console.log('成功');
        page.includeJs('https://code.jquery.com/jquery-3.2.1.min.js');
        setTimeout(function () {
            var arr = page.evaluate(function () {
                var videoImgArr = []; // 图片
                $('#anony-video .wrapper .main .video-list .video-cover a').each(function (index, item) {
                    videoImgArr.push($(item).css('backgroundImage').replace('url(','').replace(')',''));
                });
                return videoImgArr;
            });
            fs.write('./arr.json', arr, 'w');
            phantom.exit(0);
        }, 3000);
    } else {
        console.log('失败');
        phantom.exit(0);
    }
});
