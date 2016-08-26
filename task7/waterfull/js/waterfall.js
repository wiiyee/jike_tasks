/**
 * Created by jay on 2016/2/17.
 */
$(function () {
    imgLocation();
    var imgData = {
        data: [{
            "src": "01.jpg"
        }, {
            "src": "02.jpg"
        }, {
            "src": "03.jpg"
        }, {
            "src": "04.jpg"
        }, {
            "src": "05.jpg"
        }, {
            "src": "06.jpg"
        }, {
            "src": "07.jpg"
        }, {
            "src": "08.jpg"
        }, {
            "src": "09.jpg"
        }, {
            "src": "10.jpg"
        }, {
            "src": "11.jpg"
        }, {
            "src": "12.jpg"
        }]
    };
    $(window).scroll(function () {
        if (scrollHeight()) {
            $.each(imgData.data, function (index, value) {
                $("#wrapper").append('<div class="box"><div class="content"><img src="images/' + value.src + '"></div></div>');
                imgLocation();
            })

        }
    });
    $(window).resize(function () {
        imgLocation();
    })
});
//判断滚动临界点
function scrollHeight() {
    var box = $(".box");//box
    var imgCurHeight = box.last()[0].offsetTop + box.last()[0].offsetHeight / 2;//滚动高度+最后一个元素当前距离顶部高度的一般；
    var docHeight = $(window).height();//文档的高度
    var scrollHeight = $(window).scrollTop();//文档滚动的高度
    return (scrollHeight + docHeight) > imgCurHeight;//返回是否文档高度+滚动高度是否大于当前最后元素的一般时；
}
//box排序定位
function imgLocation() {
    var box = $(".box");
    var boxWidth = box.eq(0).width();
    var num = Math.floor($(window).width() / boxWidth);
    var boxArr = [];//定义数组；
    box.each(function (index, value) {
        var boxHeight = box.eq(index).height();
        if (index < num) {
            boxArr[index] = boxHeight;
            console.log(num);
            //窗口拉伸修改
            $(value).css({
                "position": "relative",
                "top": "auto",
                "left": "auto"
            });
        } else {
            var boxMinHeight = Math.min.apply(null, boxArr);
            var boxMinIndex = $.inArray(boxMinHeight, boxArr);
            $(value).css({
                "position": "absolute",
                "top": boxMinHeight,
                "left": box.eq(boxMinIndex).position().left
            });
            boxArr[boxMinIndex] += boxHeight;
        }

    })

}
