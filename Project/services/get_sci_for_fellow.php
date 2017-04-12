
<?php
// get the scientific responsible for fellow_id
//allow cross site http request
header("Access-Control-Allow-Origin: *");

header("Content-Type: application/json; charset=UTF-8");
//mysqli(mysql_server,username,pass,db)
$outp = "";
$goon=false;
if(isset($_GET['fellowId'])){
    $fellowId=$_GET['fellowId'];
    $goon=true;
}else{
$fellowId=-1 ;   
};

/********************/

//echo json_encode($txt);

//$headers =  getallheaders();
//if ($auth=$headers["Authorization"]){
//    echo json_encode($auth);
//}else
//echo json_encode("error");

 /*******************/

/*********/
//$fellowId=1;
$goon=true;
/*******/
$conn = mysqli_connect('localhost', "root", "qwe123", "elkedb");
$queryString='SELECT *, base_scidir.rec_id as base_scidir_rec_id FROM base_scidir,base_fellow,base_fellow_per_scidir where'.
' base_fellow_per_scidir.fellow_id=base_fellow.rec_id and'.
' base_fellow_per_scidir.scidir_id=base_scidir.rec_id and'.
' base_fellow.rec_id='.$fellowId;
//print $queryString;
$result = mysqli_query($conn,$queryString);
$data=array();
//error_log($queryString."\n",3,"/var/tmp/php-mysql.log");
while($row=mysqli_fetch_array($result)) {
    $data[]=$row;
}
    
//}
echo json_encode($data);
mysqli_close($conn);
?>
