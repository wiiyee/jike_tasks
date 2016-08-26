var num = 0, result = 0, numshow = "0";
var operate = 0; //判断输入状态的标志
var calcul = 0; //判断计算状态的标志
var quit = 0; //防止重复按键的标志
function getNum(num) {
    var str = document.calculator.screen.value; //获得当前显示数据
    str = (str != "0") ? ((operate == 0) ? str : "") : ""; //如果当前值不是"0"，状态为0，则返回当前值，否则返回空值;
    str = str + String(num); //给当前值追加字符
    document.calculator.screen.value = str; //刷新显示
    operate = 0; //重置输入状态
    quit = 0; //重置防止重复按键的标志
}

function minusFun() {
    var str = document.calculator.screen.value;
    str = (str != "0") ? ((operate == 0) ? str : "") : ""; //如果当前值不是"0"，状态为0，则返回当前值，否则返回空值;
    for (i = 0; i <= str.length; i++) { //判断是否已经有一个-号
        if (str.substr(i, 1) == "-") return false; //如果有则不再插入
    }
    str = "-" + str;
    document.calculator.screen.value = str;
    operate = 0;
}

function dotFun() {
    var str = document.calculator.screen.value;
    str = (str != "0") ? ((operate == 0) ? str : "0") : "0"; //如果当前值不是"0"，状态为0，则返回当前值，否则返回"0";
    for (i = 0; i <= str.length; i++) { //判断是否已经有一个点号
        if (str.substr(i, 1) == ".") return false; //如果有则不再插入
    }
    str = str + ".";
    document.calculator.screen.value = str;
    operate = 0;
}

function delFun() { //退格
    var str = document.calculator.screen.value;
    str = (str != "0") ? str : "";
    str = str.substr(0, str.length - 1);
    str = (str != "") ? str : "0";
    document.calculator.screen.value = str;
}

function clearFun() { //清除数据
    num = 0;
    result = 0;
    numshow = "0";
    document.calculator.screen.value = "0";
}

function plusFun() { //加法
    calculate(); //调用计算函数
    operate = 1; //更改输入状态
    calcul = 1; //更改计算状态为加
}

function reduceFun() { //减法
    calculate();
    operate = 1;
    calcul = 2;
}

function timesFun() { //乘法
    calculate();
    operate = 1;
    calcul = 3;
}

function divideFun() { //除法
    calculate();
    operate = 1;
    calcul = 4;
}

function perFun() { //求余
    calculate();
    operate = 1;
    calcul = 5;
}

function equalFun() { //等于
    calculate();
    operate = 1;
    num = 0;
    result = 0;
    numshow = "0";
}

function sinFun() { //sin
    calculate();
    operate = 1;
    calcul = 6;
}

function cosFun() { //cos
    calculate();
    operate = 1;
    calcul = 7;
}

function sqFun() { //求根
    calculate();
    operate = 1;
    calcul = 8;
}
function mycalc() {
    function getId(a, b) {
        return a.getElementById(b); //id选择
    }
    var per = getId(document, 'per'); //求余
    var equal = getId(document, 'equal');// 等于
    var plus = getId(document, 'plus'); //加
    var reduce = getId(document, 'reduce'); //减
    var times = getId(document, 'times'); //乘
    var divide = getId(document, 'divide'); //除
    var sq = getId(document, 'sq'); //根号
    var dot = getId(document, 'dot'); //。
    var minus = getId(document, 'minus'); //负
    var sin = getId(document, 'sin'); //sin
    var cos = getId(document, 'cos'); //cos
    var clear = getId(document, 'clear'); //清空
    var del = getId(document, 'del'); //删除
    if ((navigator.userAgent.indexOf('MSIE') >= 0)) {//ie监听事件；
        equal.attachEvent("onclick", equalFun);
        plus.attachEvent("onclick", plusFun);
        reduce.attachEvent("onclick", reduceFun);
        times.attachEvent("onclick", timesFun);
        divide.attachEvent("onclick", divideFun);
        dot.attachEvent("onclick", dotFun);
        minus.attachEvent("onclick", minusFun);
        per.attachEvent("onclick", perFun);
        sin.attachEvent("onclick", sinFun);
        cos.attachEvent("onclick", cosFun);
        sq.attachEvent("onclick", sqFun);
        clear.attachEvent("onclick", clearFun);
        del.attachEvent("onclick", delFun);
    } else {//标准浏览器监听事件；
        equal.addEventListener("click", equalFun);
        plus.addEventListener("click", plusFun);
        reduce.addEventListener("click", reduceFun);
        times.addEventListener("click", timesFun);
        divide.addEventListener("click", divideFun);
        dot.addEventListener("click", dotFun);
        minus.addEventListener("click", minusFun);
        per.addEventListener("click", perFun);
        sin.addEventListener("click", sinFun);
        cos.addEventListener("click", cosFun);
        sq.addEventListener("click", sqFun);
        clear.addEventListener("click", clearFun);
        del.addEventListener("click", delFun);
    }
}
//判断运算符及计算；
function calculate() {
    numshow = Number(document.calculator.screen.value);
    if (num != 0 && quit != 1) { //判断前一个运算数是否为零以及防重复按键的状态
        switch (calcul) { //判断要输入状态
            case 1:
                result = num + numshow;
                break; //计算"+"
            case 2:
                result = num - numshow;
                break; //计算"-"
            case 3:
                result = num * numshow;
                break;//计算"*"
            case 4:
                if (numshow != 0) {
                    result = parseFloat(num / numshow).toFixed(5);
                }
                else if{numshow ==0}{

                document.getELementById("tips").innerText = "被除数不能为0，请重新输入";
            }
                break;//计算"/"
            case 5:
                result = num % numshow;
                break;//计算"%"
            case 6:
                result = parseFloat(Math.sin(numshow*Math.PI/180)).toFixed(5);
                break;//计算"sin"
            case 7:
                result =  parseFloat(Math.cos(numshow*Math.PI/180)).toFixed(5);
                break;//计算"cos"
            case 8:
                if (numshow > 0) {
                    result = parseFloat(Math.sqrt(numshow)).toFixed(5);
                }
                break;//计算"sqrt"
        }
        quit = 1; //避免重复按键
    } else {
        result = numshow;
    }
    numshow = String(result);
    document.calculator.screen.value = numshow;
    num = result; //存储当前值
}

window.onload = mycalc;