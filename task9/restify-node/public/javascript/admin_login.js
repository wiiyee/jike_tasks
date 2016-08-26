/**
 * Created by jay on 2016/3/23.
 */

    $(function () {
        //login
        $("#login_btn").click(function (e) {
            e.preventDefault();
            if ($("#username").val() == "") {
                alert("用户名不能为空！");
            } else if ($("#password").val() == "") {
                alert("密码不能为空！");
            } else {
                $.get('http://localhost:3000/admin_login', {username: $("#username").val(), password: $("#password").val()}, function (data) {
                    //if(data[0])
                    console.log(data);
                    if(data[0].username == $("#username").val()&& data[0].password ==$("#password").val()){
                        window.location.href = "../views/admin_list.html";
                    }else{
                        alert("用户名/密码输入有误,请重新输入");
                    }

                }, 'json');
            }
        })
    })


