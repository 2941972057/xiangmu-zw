/**
 * Created by dllo on 17/8/8.
 */
var cheerio = require('cheerio');
var request = require('request');
var download = require('./download');
var options = {
    url: 'https://www.douban.com/',
    headers: {
        'Host': 'www.douban.com',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36'
    }
};
request(options, function (error, response, body) {
    var $ = cheerio.load(body);
    var hotTileArr = []; //热门标题
    var timerArr = []; // 豆瓣时间  保存图片
    // var videoArr = []; //视频 保存背景图片
    var movieArr = []; //电影  保存图片
    var teamArr = []; //小组  保存图片
    var readArr = []; //读书 保存图片
    var musicArr = []; //音乐 保存图片

    // 获取热门标题
    $("#anony-sns .wrapper .main .notes ul li>a").each(function (index, element) {
        hotTileArr.push($(element).text());
    });

    // 获取豆瓣时间
    $("#anony-time .wrapper .main ul>li>a:nth-child(1)>img").each(function (index, element) {
        var timeImg = {
            timeImg: $(element).attr('src'),
            timeTitle: $(element).attr('alt')
        };
        timerArr.push(timeImg);
        download($(element).attr('src'), 'timeImg', index + ".jpg");
    });

    // // 获取视频
    // $("#anony-video .wrapper .main ul>li>div>a").each(function (index, element) {
    //     console.log($(element).attr('href'));
    // });
    // $("#anony-video .wrapper .main ul>li>a").each(function (index, element) {
    //     console.log($(element).text());
    // });

    // 获取电影
    $("#anony-movie .wrapper .main ul>li>.pic>a>img").each(function (index, element) {
        var theMovie = {
            movieImg: $(element).attr('data-origin'),
            movieName: $(element).attr('alt')
        };
        movieArr.push(theMovie);
        download($(element).attr('data-origin'), 'movieImg', index + ".jpg");
    });

    // 获取小组
    $("#anony-group .wrapper .main ul>li>.pic>a>img").each(function (index, element) {
        var theTeam = {
            teamImg: $(element).attr('data-origin')
        };
        teamArr.push(theTeam);
        download($(element).attr('data-origin'), 'teamImg', index + ".jpg");
    });
    $("#anony-group .wrapper .main ul>li>.info>.title>a").each(function (index, element) {
        teamArr[index].teamTilte = $(element).text();
    });

    // 获取读书
    $("#anony-book .wrapper .main .mod>.book-list>ul>li>.pic>a>img").each(function (index, element) {
        var theRead = {
            readImg: $(element).attr('data-origin')
        };
        readArr.push(theRead);
        download($(element).attr('data-origin'), 'readImg', index + ".jpg");
    });
    $("#anony-book .wrapper .main .mod>.book-list>ul>li>.title>a").each(function (index, element) {
        readArr[index].readTilte = $(element).text();
    });
    $("#anony-book .wrapper .main .mod>.book-list>ul>li>.author").each(function (index, element) {
        readArr[index].readAuthor = $(element).text();
    });

    // 获取音乐
    $("#anony-music .wrapper .main .album-list>ul>li>.pic>a>img").each(function (index, element) {
        var theMusic = {
            musicImg: $(element).attr('data-origin')
        };
        musicArr.push(theMusic);
        download($(element).attr('data-origin'), 'musicImg', index + ".jpg");
    });
    $("#anony-music .wrapper .main .album-list>ul>li>.title>a").each(function (index, element) {
        musicArr[index].musicTitle = $(element).text();
    });
    $("#anony-music .wrapper .main .album-list>ul>li>.artist>a").each(function (index, element) {
        musicArr[index].musicAuthor = $(element).text();
    });
    $("#anony-music .wrapper .main .album-list>ul>li>.rating>i").each(function (index, element) {
        musicArr[index].musicScore = $(element).text();
    });
});