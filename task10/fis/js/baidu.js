/**
 * Created by jay on 2016/2/22.
 */
//---------扩展方法imgFocus()---------
jQuery.fn.extend({
    imgFocus: function() {
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
        indexFocus.find(".skin-page-number").hover(function() {
            index = $(this).index() - 1;
            showPics(index);

        }).trigger("mouseleave");
        //点击上一页
        $(".page-pre").click(function() {
            index--;
            if (index == -1) {
                index = len - 1;
            }

            showPics(index);
        });
        //点击下一页
        $(".page-next").click(function() {
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
$(window).load(function() {
    $(".s-skin-background").css("background-image", "url('skin\/" + getCookie("background") + "')");
    var background = getCookie("background");
    if (background) {
        $(".header").addClass("skin-nav-bg");
        $(".bd_logo").addClass("bd_logo2");
        $(".s-main").addClass("changeskin");
    }
});
$(function() {
    //导航下
    $(".dropdown-box").hover(function() {
        $(this).children(".dropdown").show();

    }, function() {
        $(this).children(".dropdown").hide();
    });
    //更多产品
    $("#moreProduct").hover(function() {


        $(".more-product").css({
            "display": "block",
            "opacity": "1",
            "z-index": "2",
            "min-height": $(document).height()
        }).mouseleave(
            function() {

                $(this).hide();
            });

    });
    //皮肤一级导航切换
    $(".skin-nav-list>.changeitem").each(function(index) {
        $(this).hover(function() {
            $(this).addClass("current").siblings().removeClass("current");
            $(".skin-content-tabs").hide().eq(index).show();
        })
    });
    //皮肤列表显示
    $("#changeSkin").click(function(e) {
        $(".skin").slideDown();
        e.stopPropagation();
        var skinList = $(".skin-content-sub-list:visible");
    });
    $(".skin-content-sub-list").eq(0).imgFocus(); //调用imgFocus()方法;
    //皮肤列表收起
    $("#skin-slideup").click(function() {
        $(".skin").slideUp();

    });
    $(document).click(function() {
        $(".skin").slideUp();
    });
    $("#skin").click(function(e) {
        e.stopPropagation();
    });
    //2类皮肤切换
    $(".skin-nav-sub>li").click(function() {
        $(this).addClass("blue").siblings().removeClass("blue");

        $(this).parent().next(".skin-content-sub").find("ul").hide().eq($(this).index()).show();

    });
    //皮肤预览,皮肤选中
    $(".skin-content-sub-list>li").hover(function() {
        $(".skin-preview-img img").attr("src", $(this).children("img").attr("src"))

    }, function() {
        if ($(".skin-chosen").length > 0) {
            $(".skin-preview-img img").attr("src", $(".skin-chosen").prev("img").attr("src"))
        }
    }).click(function() {
        $(this).append('<div class="skin-chosen"></div>').siblings().children(".skin-chosen").remove();
    });
    //皮肤更换
    $(".skin-list-item").click(function() {
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
    //搜索下--百度推荐--切换
    $(".s-nav-item").each(function(index) {
        var item = $(this);
        item.click(function() {
            $(".s-nav-item").removeClass("s-bg-gray");
            item.addClass("s-bg-gray");
            $(".s-content-tabs").hide().eq(index).show();
        })

    });
    $(".m-nav ul li").hover(function() {
        $(this).find(".rebate").animate({
            bottom: "0"
        }, 200);
    }, function() {
        $(this).find(".rebate").animate({
            bottom: "-18px"
        }, 200);
    });
    $(".card-super").hover(function() {
        $(this).addClass("down");
        $(".card-super-down").show();
    }, function() {
        $(this).removeClass("down");
        $(".card-super-down").hide();
    });

    //百度推荐切换--设置
    $("#iset").click(function() {
        if ($(".iset-content").attr("data-value") == 0) {
            $(".iset-content").attr("data-value", 1);
            $(".iset-content").show();
        } else {
            $(".iset-content").hide();
            $(".iset-content").attr("data-value", 0);
        }
    });
    // 已订阅--未订阅
    for (var i = 0; i < $(".rss").length; i++) {
        $("#rss-" + i).click(function() {
            $(this).hide();
            $("#noRss-" + i).show();
        });

    };
    $(".rss").each(function(index){
        $("#rss-"+index).click(function(){
            $(this).hide();
            $("#noRss-"+index).show();
    
        })
    })
    $(".norss").each(function(index){
        $("#noRss-"+index).click(function(){
            $(this).hide();
            $("#rss-"+index).show();
        })
    })
    // 返回顶部
    $(window).scroll(function() {
        backTop();
    });
    $(".scr-top").click(function() {
    
        $(document).scrollTop(0);
    })
});
// 返回顶部方法
function backTop() {
    if ($(window).scrollTop() > 50) {
        $(".scr-top").show();
    } else {
        $(".scr-top").hide();
    }
}
