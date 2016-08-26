define(function (require, exports, module) {
    exports.extend = $.fn.extend({
        imgScroll: function () {
            var _this = $(this);
            var list = _this.find(".img-box-list");
            var prev = _this.find(".prev");
            var next = _this.find(".next");
            var width = _this.find(".img-box-list li").width();
            var value = _this.find(".img-box-list li").length - 1;
            var index = 0;
            $(".comany .content,.focus-lesson .content").hover(function () {
                $(this).children("span").show();
            }, function () {
                $(this).children("span").hide();
            });
            prev.click(function () {
                index++;
                var len = _this.find(".img-box-list li").length;
                if (index + value == len) {
                    list.stop().append(list.html());
                }
                list.stop().animate({left: -index * width}, 800);
            });
            next.click(function () {
                if (index == 0) {
                    list.prepend(list.html());
                    list.css("left", -value * width);
                    index = value + 1;
                }
                index--;
                list.stop().animate({left: -index * width}, 800);
            });
        },
        imgFocus: function () {
            var _this = $(this);
            var sWidth = _this.width();
            var len = _this.find("li").length;
            var index = 0;
            var btn = "<div class='btn'>";
            for (var i = 0; i < len; i++) {
                btn += "<span></span>";
            }
            btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
            _this.append(btn);
            _this.find("span").mouseover(function () {
                index = _this.find("span").index(this);
                showPics(index);
            }).eq(0).trigger("mouseover");

            _this.find(".preNext").css("opacity", 0.5).hover(function () {
                $(this).stop(true, false).animate({
                    "opacity": "0.5"
                }, 300);
            }, function () {
                $(this).stop(true, false).animate({
                    "opacity": "0"
                }, 300);
            });

            _this.find(".pre").click(function () {
                index--;
                if (index == -1) {
                    index = len - 1;
                }
                showPics(index);

            });

            _this.find(".next").click(function () {
                index++;
                if (index == len) {
                    index = 0;
                }
                showPics(index);
            });
            _this.find("ul").css("width", sWidth * (len));
            _this.hover(function () {
                clearInterval(picTimer);
            }, function () {
                picTimer = setInterval(function () {
                    showPics(index);
                    index++;
                    if (index == len) {
                        index = 0;
                    }
                }, 4000);
            }).trigger("mouseleave");

            function showPics(index) {
                var nowLeft = -index * sWidth;
                _this.find("ul").stop(true, false).css({'transform': 'translate3d(' + nowLeft + 'px,0px,0px)', 'transition-duration': '1s'});

                //_this.find("ul").stop(true, false).animate({transform:'translateX(' + nowLeft + 'px)'}, "slow");
                _this.find("span").stop(true, false).removeClass('on').eq(index).stop(true, false).addClass('on');
            }
        }
    });
    exports.jq = $(function () {
        // 搜索框事件
        $("#inputSearch").focus(function () {

            $(this).siblings(".hot-search").hide();
        }).blur(function () {

            $(this).siblings(".hot-search").show();
        });

        // 导航下拉事件
        $(".menu").hover(function () {
            $(".submenu").show();
            $(".submenu>ul>li").eq($(this).index()).addClass("current");
        }, function () {
            $(".submenu").hide();
            $(".submenu>ul>li").eq($(this).index()).remove("current");
        });

        // tabs切换事件
        $(".tabs-menu>li").mouseover(function () {
            $(this).addClass("current").siblings().removeClass("current");
            $(this).parent().siblings(".tabs-content").hide().eq($(this).index()).show();
        });
        //课程
        $(".lesson-box").hover(function () {

            $(this).addClass("index10");
            $(this).find(".info").show();
            $(this).find(".blank").animate({
                opacity: "0.9"
            }, "400");

        }, function () {

            $(this).removeClass("index10");
            $(this).find(".info").hide();
            $(this).find(".blank").animate({
                opacity: "0"
            }, "400")
        });
        //nav侧边导航
        $(".sidenav li").mouseover(function () {
            $(this).find(".sidenav-2").show();
        }).mouseout(function () {
            $(this).find(".sidenav-2").hide();
        });

        $(".excellent li").hover(function () {
            $(this).find(".say").animate({
                opacity: "0.9"
            }, "400")
        }, function () {
            $(this).find(".say").animate({
                opacity: "0"
            }, "400")
        });
        // 知识体系图
        //$(".kn-sys li").hover(function () {
        //    $(this).find("a").toggleClass("flipInY").find(".skew-b").show();
        //
        //}, function () {
        //    $(this).find("a").toggleClass("flipInY").find(".skew-b").hide();
        //
        //});
        //图书--看一看
        $(".ibook-face").hover(function () {
            $(this).find("img").animate({
                width: "-=10px"
            }, "slow");
            $(this).children("i").show();
        }, function () {
            $(this).find("img").animate({
                width: "+=10px"
            }, "slow");
            $(this).children("i").hide();
        });
        //问答、wiki滑过样式。。。
        $(".recommend-list .tabs-type").hover(function () {
            $(".submenu-tab").show();
            $(".submenu-tab .tablist li").eq($(this).index()).addClass("current").siblings().removeClass("current");
            $(".submenu-tab .tabcontent>div").hide().eq($(this).index()).show();
            $(this).parents().siblings(".submenu-tab").find(".tablist-li").hover(function () {
                $(".submenu-tab .tablist li").eq($(this).index()).addClass("current").siblings().removeClass("current");
                $(".submenu-tab .tabcontent>div").hide().eq($(this).index()).show();
            }).parentsUntil(".submenu-tab").mouseleave(function () {
                $(".submenu-tab").hide();
            });
        });
        //footer底部微信二维码
        $(".share-web a.weixin").hover(function () {
            $(this).children().show();
        }, function () {
            $(this).children().hide();
        });
        //标题问号滑过样式
        $(".way").hover(function () {
            $(this).next(".way-infor").stop(true, false).animate({"opacity": "1", "margin-left": "2px"})
        }, function () {
            $(this).next(".way-infor").stop(true, false).animate({"opacity": "0", "margin-left": "-6px"})
        });
        //返回顶部、客服、二维码
        $(".ewm-weixin").hover(function () {
            $(this).find(".ewm-weixin-img").show();
        }, function () {
            $(this).find(".ewm-weixin-img").hide();
        });
        $(".ewm-weibo").hover(function () {
            $(this).find(".ewm-weibo-img").show();
        }, function () {
            $(this).find(".ewm-weibo-img").hide();
        });
        $(".sidemm").hover(function () {
            $(this).find(".sidemm-time").show();
        }, function () {
            $(this).find(".sidemm-time").hide();
        });

        $("#focus").imgFocus();
        $(".company").imgScroll();
        $(".school").imgScroll();
        $(".mediars").imgScroll();
        $(".focus-lesson").imgScroll();
        $(window).on("scroll", function () {
            backTop();
        });
        $(".backtop").click(function () {
            $('body,html').animate({scrollTop: 0}, 1000);
            return false;
        });
        function backTop() {
            if ($(window).scrollTop() > 100) {
                $(".sidetool").show(400);
            } else {
                $(".sidetool").hide(400);
            }
        }
    })
});
