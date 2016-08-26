/**
 * Created by jay on 2016/3/23.
 */
define(function (require, exports, module) {
    $(function () {
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
        function focusNews() {
            var _this = $("[data-sql=focus-list]");
            var _width = $(document).width();
            var len = _this.find("li").length;
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

                if (index == len) {
                    index = 0;
                }
                showPic(index);
                index++;
            }, 3000);
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
                if (index == len - 1) {
                    index = 0;
                }
            }, 3000);
            function showNews(index) {
                _this.stop(true, false).animate({
                    "top": -index * _height
                });
            }
        }
        //   ajax 数据推送
        $.ajax({
            url: "http://localhost/bd_news/modules/news.php",
            type: "get",
            dataType: "json",
            data: {},
            beforeSend: function () {
                $("[data-ui=load_mask]").show();
            },
            success: function (data) {
                $("[data-ui=load_mask]").hide();
                console.log(data);
                //文章列表调用
                function newsList(num, catName) {
                    var _this = $("[data-sql=news-list]");
                    _this.find("li").remove();
                    //加载更多
                    //$(window).scroll(function(){
                    //    if ($(document).scrollTop() >= $(document).scrollTop() - $(window).scrollTop() && num > data[catName].length) {
                    //        num += 2;
                    //    }
                    //
                    //});
                    //判断数据库调用条数
                    if (num > data[catName].length) {
                        num = data[catName].length;
                    }
                    for (var i = 0; i < num; i++) {
                        _this.append("<li class='img-txt'>"
                            + "<div class='thumbnail'><img src='' ></div><div class='txt'> <dl> <dt class='title'><a href='#' class='title-a'></a></dt> <dd class='info'></dd> </dl>"
                            + "<div class='tips clearfix'><span class='pubdate fl'></span><span class='btn  txt-tip fr' data-ui='flag'></span></div></div> </li>");
                        _this.children("li").eq(i).find("img").attr("src", data[catName][i].imgsrc);
                        _this.children("li").eq(i).find(".title-a").html(data[catName][i].title);
                        _this.children("li").eq(i).find(".info").html(data[catName][i].content);
                        _this.children("li").eq(i).find(".pubdate").html(data[catName][i].date);

                        if (data[catName][i].flag == 'h') {
                            _this.children("li").eq(i).find(".txt-tip").html("热点").addClass("btn-danger");

                        } else if (data[catName][i].flag == 'c') {
                            _this.children("li").eq(i).find(".txt-tip").html("猜你喜欢").addClass("btn-primary");
                        }
                    }
                }
                //热门文章
                function hotList(num, catName) {
                    var _this = $("[data-sql=hot-news-list]");
                    for (var i = 0; i < num; i++) {
                        _this.append("<li><a href='#'></a></li>");
                        _this.children("li").eq(i).find("a").html(data[catName][i].title)

                    }
                    hotNews();
                }
                //图片切换
                function focusList(num, catName) {
                    var _this = $("[data-sql=focus-list]");
                    for (var i = 0; i < num; i++) {
                        //_this.append("<li><a href='#'>"
                        //+"<img src=''>"
                        //+"<i class='mask'></i>"
                        //+"<p class='focus-list-title'></p></a></li>");
                        _this.children("li").eq(i).find("img").attr("src", data[catName][i].imgsrc);
                        _this.children("li").eq(i).find(".focus-list-title").html(data[catName][i].title);
                    }
                    focusNews();
                }
                newsList(6, 'arr_sql_com');
                hotList(5, 'arr_sql_hot');
                focusList(3, 'arr_sql_focus');
                //点击切换频道
                $(".main-nav-list>li>a").on("click", function () {
                    if (this.text == "推荐") {
                        newsList(6, 'arr_sql_com');
                    } else if (this.text == "百家") {
                        newsList(6, 'arr_sql_bj');
                    } else if (this.text == "本地") {
                        newsList(6, 'arr_sql_local');
                    } else if (this.text == "图片") {
                        newsList(6, 'arr_sql_img');
                    }
                });
            },
            error: function (jqXHR) {
                alert("error：" + jqXHR.status);
            }

        });
    });
});
