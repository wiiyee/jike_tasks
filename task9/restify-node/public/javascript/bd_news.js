/**
 * Created by jay on 2016/3/23.
 */

$(function () {
    var newListNum = 5;
    $(".main-nav-list>li").click(function () {
        var catid = $(this).attr("data-val");
        $(".main-nav-list>li").removeClass("current");
        $(this).addClass("current");
        newListNum = 5;
        newList(catid, newListNum, 5, 3);
        $(".load-more").find("span").html("加载更多");
    });
    $(".load-more").click(function () {
        var catid = $(".main-nav-list li.current").attr("data-val");
        if (newListNum < 10) {
            newListNum += 3;
            newList(catid, newListNum, 5, 3);
        } else {
            $(this).find("span").html("没有新闻了...");
        }
        console.log(newListNum);
    });
    //导航更多
    $("[data-ui=more-nav-list]").click(function () {
        $(this).hide();
        $("[data-ui=main-nav-footer]").show();
        $("[data-ui=”more-list-none“]").show();
    });
    //导航收起更多
    $("[data-ui=main-nav-footer-up]").click(function () {
        $("[data-ui=main-nav-footer]").hide();
        $("[data-ui=more-nav-list]").show();
        $("[data-ui=”more-list-none“]").hide();
    });
    //返回顶部
    $(".scroll-top").click(function () {
        $(window).scrollTop(0);

    });
    function scrollTop() {
        if ($(window).scrollTop() > 100) {
            $("[data-ui=side-toll]").show();

        } else {
            $("[data-ui=side-toll]").hide();

        }
    }

    $(window).scroll(function () {
        scrollTop();
    });


    function newList(catid, num, num1, num2) {
        $.get('http://localhost:3000/index', {arrNews: ['', catid, '', '', '', '', '', num]}, function (data) {
            console.log(data);
                var newList = $("[data-sql=news-list]");
                var hotList = $("[data-sql=hot-news-list]");
                var focusList = $("[data-sql=focus-list]");
                newList.empty();
                hotList.empty();
                focusList.empty();
                for (var i = 0; i < data.length; i++) {
                    newList.append("<li class='img-txt'>"
                        + "<div class='thumbnail'><img src='' ></div><div class='txt'> <dl> <dt class='title'><a href='#' class='title-a'></a></dt> <dd class='info'></dd> </dl>"
                        + "<div class='tips clearfix'><span class='pubdate fl'></span><span class='btn  txt-tip fr' data-ui='flag'></span></div></div> </li>");
                    newList.children("li").eq(i).find("img").attr("src", data[i].imgsrc);
                    newList.children("li").eq(i).find(".title-a").html(data[i].title);
                    newList.children("li").eq(i).find(".info").html(data[i].content);
                    newList.children("li").eq(i).find(".pubdate").html(data[i].date);

                    if (data[i].flag == 'h') {
                        newList.children("li").eq(i).find(".txt-tip").html("热点").addClass("btn-danger");

                    } else {
                        newList.children("li").eq(i).find(".txt-tip").html("猜你喜欢").addClass("btn-primary");
                    }
                }

                for (var h = 0; h < num1; h++) {
                    hotList.append("<li ><a href='#'></a></li>");
                    hotList.find("a").eq(h).html(data[h].title);

                }

                for (var f = 0; f < num2; f++) {
                    focusList.append(' <li><a href="#"> <img src=" " alt=""> <i class="mask"></i> <p class="focus-list-title"></p> </a> </li>');
                    focusList.children("li").eq(f).find("img").attr("src", data[f].imgsrc);
                    focusList.children("li").eq(f).find(".focus-list-title").html(data[f].title);
                }
                hotNews();
                focusNews();
            }
            ,
            'json'
        )

    }

    newList(1, newListNum, 5, 3);


    function focusNews() {
        var _this = $("[data-sql=focus-list]");
        var _width = $(document).width();
        var len = _this.find("li").length;
        $(".focus-list li").css("width", $(document).width());
        var index = 0;
        var pageBtn = $("[data-ui=focus-index-ul]").find("li");
        _this.css("width", $(document).width() * 3);
        _this.find("li").css("width", $(document).width());
        pageBtn.click(function () {
            $(this).addClass("current").siblings().removeClass("current");
            _this.stop(true, false).animate({
                "left": -$(this).index() * _width
            });
        });
        var picTimer = setInterval(function () {
            index++;
            if (index == len) {
                index = 0;
            }
            showPic(index);

        }, 4000);

        function showPic(index) {
            _this.stop(true, false).animate({
                "left": -index * _width
            });
            pageBtn.stop(true, false).eq(index).addClass("current").siblings().removeClass("current");
        }
    }

    function hotNews() {
        var _this = $("[data-sql=hot-news-list]");
        var _height = _this.height();
        var len = _this.find("li").length;
        var index = 0;
        var picTimer = setInterval(function () {
            showNews(index);
            index++;
            if (index == len) {
                index = 0;
            }
        }, 3000);

        function showNews(index) {
            _this.stop(true, false).animate({
                "top": -index * _height
            });
        }
    }


});

