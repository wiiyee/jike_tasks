<?php 
header("Content-type:application/json;charset=utf-8");
$conn = mysql_connect("localhost","root","root");
if(!$conn){
	die("连接失败".mysql_error);
}else{
  	mysql_select_db( 'PHP_NEWS' );
 	mysql_query("set names 'utf8'",$conn);
 	$sql_com = "select * from  news where catid=1";
 	$sql_bj = "select * from news where catid=2";
 	$sql_local = "select * from news where catid=3";
 	$sql_img = "select * from news where catid=4";
 	$sql_hot = "select * from news where flag='h'";
 	$sql_fucus= "select * from news where flag='f'";
 	$result_sql_com = mysql_query($sql_com,$conn);
 	$result_sql_bj = mysql_query($sql_bj,$conn);
 	$result_sql_local = mysql_query($sql_local,$conn);
 	$result_sql_img = mysql_query($sql_img,$conn);
 	$result_sql_hot = mysql_query($sql_hot,$conn);
	 $result_sql_focus= mysql_query($sql_fucus,$conn);
	$arr_sql_com = array();
	$arr_sql_bj = array();
	$arr_sql_local = array();
	$arr_sql_img = array();
	$arr_sql_hot = array();
	$arr_sql_focus = array();
	$arr_json = array();
	// 频道1
 	while($row = mysql_fetch_array($result_sql_com)){
		array_push($arr_sql_com,array("title"=>$row['title'],"imgsrc"=>$row['imgsrc'],"content"=>$row['content'],"date"=>$row['date'],"flag"=>$row['flag']));
	}
	// 频道2
	while($row = mysql_fetch_array($result_sql_bj)){
    		array_push($arr_sql_bj,array("title"=>$row['title'],"imgsrc"=>$row['imgsrc'],"content"=>$row['content'],"date"=>$row['date'],"flag"=>$row['flag']));
    	}
    	// 频道3
    	while($row = mysql_fetch_array($result_sql_local)){
    		array_push($arr_sql_local,array("title"=>$row['title'],"imgsrc"=>$row['imgsrc'],"content"=>$row['content'],"date"=>$row['date'],"flag"=>$row['flag']));
    	}
    	// 频道4
    	while($row = mysql_fetch_array($result_sql_img)){
    		array_push($arr_sql_img,array("title"=>$row['title'],"imgsrc"=>$row['imgsrc'],"content"=>$row['content'],"date"=>$row['date'],"flag"=>$row['flag']));
    	}
    	// 热门文章
    	 while($row = mysql_fetch_array($result_sql_hot)){
    		array_push($arr_sql_focus,array("title"=>$row['title'],"imgsrc"=>$row['imgsrc'],"content"=>$row['content'],"date"=>$row['date'],"flag"=>$row['flag']));
    	}
    	// 焦点图文章
    	 while($row = mysql_fetch_array($result_sql_focus)){
    		array_push($arr_sql_hot,array("title"=>$row['title'],"imgsrc"=>$row['imgsrc'],"content"=>$row['content'],"date"=>$row['date'],"flag"=>$row['flag']));
    	}

    	 $array_cat=array("arr_sql_com"=>$arr_sql_com,"arr_sql_bj"=>$arr_sql_bj,"arr_sql_local"=>$arr_sql_local,"arr_sql_img"=>$arr_sql_img,"arr_sql_hot"=>$arr_sql_hot,"arr_sql_focus"=>$arr_sql_focus);

	    echo json_encode($array_cat);
	    mysql_close($conn);
 }
 ?>