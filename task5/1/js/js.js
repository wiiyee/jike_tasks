function calcScore() {
    var student = document.getElementById('student').value;
    document.getElementById('student').value = Math.round(student);
    var score ;
    for(var i = 0; i<10;i++)
    {
        if(student <= 100 && student >= i*10){
            score = '该学生为'+(10-i)+'等生';

        }else if(student ==''){
            score = '请输入正确的成绩';

        }}

    //}
    //switch (true) {
    //    case student <= 100 && student >= 90:
    //        score = '该学生为1等生';
    //        break;
    //    case student < 90 && student >= 80:
    //        score = '该学生为2等生';
    //        break;
    //    case student < 80 && student >= 70:
    //        score = '该学生为3等生';
    //        break;
    //    case student < 70 && student >= 60:
    //        score = '该学生为4等生';
    //        break;
    //    case student < 60 && student >= 50:
    //        score = '该学生为5等生';
    //        break;
    //    case student < 50 && student >= 40:
    //        score = '该学生为6等生';
    //        break;
    //    case student < 40 && student >= 30:
    //        score = '该学生为7等生';
    //        break;
    //    case student < 30 && student >= 20:
    //        score = '该学生为8等生';
    //        break;
    //    case student < 20 && student >= 10:
    //        score = '该学生为9等生';
    //        break;
    //    case student < 10 && student > 0 && student === 0:
    //        score = '该学生为10等生';
    //        break;
    //
    //    default:
    //        score = '请输入正确的成绩';
    //}
    document.getElementById('score').value = score;
}