/**
 * Created by jay on 2016/2/22.
 */
//---------扩展方法imgFocus()---------
 jQuery.fn.extend({
    imgFocus: function () {
        //定义变量
        var _this = $(this);
        var indexFocus = $(".skin-page-cell");
        var sWidth = _this.width();
        var len = _this.find("li").length / 12;
        var index = 0;
        var btn = "<li class='page-pre'></li>";
        //追加切换图标
        for (var i = 0; i < len; i++) {
            btn += "<li class='skin-page-number'></li>";
        }
        btn += "<li class='page-next'></li>";
        indexFocus.append(btn);
        indexFocus.find(".skin-page-number").hover(function () {
            index = $(this).index() - 1;
            showPics(index);

        }).trigger("mouseleave");
        //点击上一页
        $(".page-pre").click(function () {
            index--;
            if (index == -1) {
                index = len - 1;
            }

            showPics(index);
        });
        //点击下一页
        $(".page-next").click(function () {
            index++;
            if (index == len) {
                index = 0;
            }
            showPics(index);
        });
        //显示当前
        function showPics(index) {
            if (index <= len) {
                var currentPage = ".page-" + index;
                _this.children("li").hide().filter(currentPage).show();
                //console.log(currentPage);
                indexFocus.find(".skin-page-number").removeClass('page-on').eq(index - 1).addClass('page-on');
            }
        }
    }
});
//------------------换肤cookie---------------------
var baidu = {
    init: function () {
        var $me = this;
        $me.render();
        $me.bind();
    },
    render: function () {
        var $me = this;
        $me.dropdownBox = $('.dropdown-box');
        $me.moreProduct = $('#moreProduct');
        $me.changeItem = $('.skin-nav-list>.changeitem');
        $me.changeSkin = $('#changeSkin');
        $me.skinContentSubList = $('.skin-content-sub-list');
        $me.skinSlideup = $('.skin-slideup');
        $me.skinId = $('#skin');
        $me.skinNavSub = $('.skin-nav-sub>li');
        $me.skinContentSubListLi = $('.skin-content-sub-list>li');
        $me.skinListItem = $(".skin-list-item");
        $me.mNavUlli =  $(".m-nav ul li");
        $me.cardSuper = $(".card-super");
        $me.sNavItem=$(".s-nav-item");
        $me.iSet = $("#iset");
        $me.rss = $(".rss");
        $me.norss = $(".norss");
        $me.window=$(window);
        $me.scrTop=$(".scr-top");
    },
    bind: function () {
        var $me = this;
        $me.dropdownBox.hover(function () {
            $(this).children(".dropdown").show();
        }, function () {
            $(this).children(".dropdown").hide();
        });
        $me.moreProduct.hover(function () {
            $(".more-product").css({
                "display": "block",
                "opacity": "1",
                "z-index": "2",
                "min-height": $(document).height()
            }).mouseleave(
                function () {
                    $(this).hide();
                });

        });
        $me.changeItem.each(function (index) {
            $(this).hover(function () {
                $(this).addClass("current").siblings().removeClass("current");
                $(".skin-content-tabs").hide().eq(index).show();
            })
        });
        $me.changeSkin.click(function (e) {
            $(".skin").slideDown();
            e.stopPropagation();
            var skinList = $(".skin-content-sub-list:visible");
        });
        $me.skinContentSubList.eq(0).imgFocus();
        $me.skinSlideup.click(function () {
            $(".skin").slideUp();
        });
        $(document).click(function () {
            $(".skin").slideUp();
        });
        $me.skinId.click(function (e) {
            e.stopPropagation();
        });
        $me.skinNavSub.click(function () {
            $(this).addClass("blue").siblings().removeClass("blue");
            $(this).parent().next(".skin-content-sub").find("ul").hide().eq($(this).index()).show();

        });
        $me.skinContentSubListLi.hover(function () {
            $(".skin-preview-img img").attr("src", $(this).children("img").attr("src"))
        }, function () {
            if ($(".skin-chosen").length > 0) {
                $(".skin-preview-img img").attr("src", $(".skin-chosen").prev("img").attr("src"))
            }
        }).click(function () {
            $me.skinContentSubListLi.append('<div class="skin-chosen"></div>').siblings().children(".skin-chosen").remove();
        });
        $me.skinListItem.click(function () {
            if ($(this).children("img").length != 0) {
                var imgId = $(this).children("img").attr("src").substring(7);
                $(".s-skin-background").css("background-image", "url(skin\/" + imgId + ")");
                $("header").addClass("skin-nav-bg");
                $(".ft-container span,.ft-container a").css("color", "#fff");
                $(".bd_logo").addClass("bd_logo2");
                $(".s-main").addClass("changeskin");
                changeSkin(imgId);
            }
        });
        $me.sNavItem.each(function(index) {
            $(this).click(function() {
                $(".s-nav-item").removeClass("s-bg-gray");
                $(this).addClass("s-bg-gray");
                $(".s-content-tabs").hide().eq(index).show();
            })

        });
        $me.mNavUlli.hover(function () {
            $(this).find(".rebate").animate({
                bottom: "0"
            }, 200);
        }, function () {
            $(this).find(".rebate").animate({
                bottom: "-18px"
            }, 200);
        });
        $me.cardSuper.hover(function () {
            $(this).addClass("down");
            $(".card-super-down").show();
        }, function () {
            $(this).removeClass("down");
            $(".card-super-down").hide();
        });
        $me.iSet.click(function () {
            if ($(".iset-content").attr("data-value") == 0) {
                $(".iset-content").attr("data-value", 1);
                $(".iset-content").show();
            } else {
                $(".iset-content").hide();
                $(".iset-content").attr("data-value", 0);
            }
        });
        for (var i = 0; i < $me.rss.length; i++) {
            $("#rss-" + i).click(function () {
                $("#rss-" + i).hide();
                $("#noRss-" + i).show();
            });

        }
        $me.rss.each(function (index) {
            $("#rss-" + index).click(function () {
                $("#rss-" + index).hide();
                $("#noRss-" + index).show();

            })
        });
        $me.norss.each(function (index) {
            $("#noRss-" + index).click(function () {
                $(this).hide();
                $("#rss-" + index).show();
            })
        });
        $me.window.scroll(function () {
            backTop();
        });
        $me.scrTop.click(function () {
            $(document).scrollTop(0);
        });
        // 返回顶部方法
        function backTop() {
            if ($me.window.scrollTop() > 50) {
                $me.scrTop.show();
            } else {
                $me.scrTop.hide();
            }
        }
    }
};
baidu.init();
// 设置cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
// 获取cookie值
function getCookie(cname) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(cname + "=")
        if (c_start != -1) {
            c_start = c_start + cname.length + 1
            c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
}
// 设置body背景
function changeSkin(imgId) {
    $(".s-skin-background").css("background-image", "url('skin\/" + imgId + "')");
    this.setCookie("background", imgId, 30);
}
//页面加载获取cookie
$(window).load(function () {
    $(".s-skin-background").css("background-image", "url('skin\/" + getCookie("background") + "')");
    var background = getCookie("background");
    if (background) {
        $(".header").addClass("skin-nav-bg");
        $(".bd_logo").addClass("bd_logo2");
        $(".s-main").addClass("changeskin");
    }
});