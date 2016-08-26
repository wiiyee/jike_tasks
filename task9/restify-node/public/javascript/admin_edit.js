/**
 * Created by jay on 2016/3/23.
 */
    var navigation = responsiveNav("foo", {customToggle: ".nav-toggle"});
    $(function () {
            //回传
            $.get('http://localhost:3000/admin_list',
                {arrNews: ['', '', '', '', '', '', '']},
                function (data) {
                    console.log(data);
                    //if (data[0].errorCode == 'no') {
                    //    $("body").html("<div class='text-center check-msg'><h2>"+data[0].msg+"</h2><a href='login.html' class='btn btn-success'>点击登录</a></div>");
                    //} else {
                        $("#admin_list").append('<tbody class="table-striped  table-bordered" id="table-data"></tbody>');
                        for (var i = 0; i < data.length; i++) {
                            var flag = data[i].flag;
                            if (flag == 'c') {
                                flag = '推荐'
                            }
                            else if (flag == 'h') {
                                flag = '热点'
                            }
                            else if (flag == 'f') {
                                flag = '焦点图'
                            }
                            $("#table-data").append('<tr ><td data-sql="data-id">' + data[i].id + '</td><td>' + data[i].title + '</td><td>' + data[i].date + '</td><td>'
                                + flag + '</td><td><a class="btn btn-success btn-sm editBtn"  >编辑</a><a class="btn btn-danger btn-sm delBtn"  >删除</a></td></tr>');

                        }
                        $(".editBtn").click(editClick);
                        $(".delBtn").click(delClick);
                    //}
                }, 'json'
            );

            //修改
            function editClick() {
                var _this = $(this).parents("tr");
                var id = _this.find("[data-sql=data-id]").text();
                $(this).attr("href", "../views/admin_edit.html?id=" + id);
            }

            //更新

            if (window.location.search.indexOf("?") != -1) {
                var id = window.location.search.split("=")[1];
                $.get('http://localhost:3000/admin_list/id', {arrNews: [id, '', '', '', '', '', '']}, function (data) {
                        //if (data[0].errorCode == 'no') {
                        //    $("body").html("<div class='text-center check-msg'><h2>"+data[0].msg+"</h2><a href='login.html' class='btn btn-success'>点击登录</a></div>");
                        //} else {
                            $("input[value=" + data[0].flag + "]").attr("checked", 'checked');
                            $("option[value=" + data[0].catid + "]").attr("selected", true);
                            $("#title").attr("value", data[0].title);
                            $("#imgsrc").attr("value", data[0].imgsrc);
                            $("#content").val(data[0].content);
                            $("#date").attr("value", data[0].date);
                        //}
                    }, 'json'
                );

                $("#submit").click(function (e) {
                    e.preventDefault();
                    if ($("option:selected").val() == "") {
                        alert("请选择新闻频道");
                    } else if ($("#title").val() == "") {
                        alert("请输入新闻标题");
                    } else if ($("#imgsrc").val() == "") {
                        alert("请输入新闻图片地址");
                    } else if ($("#content").val() == "") {
                        alert("请输入新闻内容");
                    } else if ($("#date").val() == "") {
                        alert("请输入发布日期");
                    } else if ($("input[name='flag']:checked").val() == "") {
                        alert("请选择推荐类型");
                    } else {
                        $.post('http://localhost:3000/admin_update', {arrNews: [id, $("option:selected").val(), $("#title").val(), $("#imgsrc").val(), $("#content").val(), $("#date").val(), $("input[name='flag']:checked").val()]}, function (data) {
                                alert("修改成功！");
                                window.location.href = "../views/admin_list.html";
                            }, 'json'
                        );
                    }
                })
            } else {
                //新增
                $("#submit").click(function (e) {
                    e.preventDefault();
                    if ($("option:selected").val() == "") {
                        alert("请选择新闻频道");
                    } else if ($("#title").val() == "") {
                        alert("请输入新闻标题");
                    } else if ($("#imgsrc").val() == "") {
                        alert("请输入新闻图片地址");
                    } else if ($("#content").val() == "") {
                        alert("请输入新闻内容");
                    }
                    else if ($("#date").val() == "") {
                        alert("请输入发布日期");
                    } else if ($("input:radio[name='flag']:checked").val() == "") {
                        alert("请选择推荐类型");
                    } else {
                        $.post('http://localhost:3000/admin_insert', {
                            arrNews: ['', $("option:selected").val(), $("#title").val(), $("#imgsrc").val(), $("#content").val(), $("#date").val(), $("input:radio[name='flag']:checked").val()]
                        }, function (data) {

                                alert("成功添加一篇新闻！");
                                window.location.href = "../views/admin_list.html";

                        })
                    }
                });
            }

            //删除
            function delClick() {
                var _this = $(this).parents("tr");
                var dataId = _this.find("[data-sql=data-id]").text();
                console.log(dataId);
                $rConfirm = confirm("是否确认删除");
                if ($rConfirm == true) {
                        $.get('http://localhost:3000/admin_list_del', {arrNews: [dataId, '', '', '', '', '', '']}, function () {
                        _this.remove();
                    })
                }
            }
        }
    )


