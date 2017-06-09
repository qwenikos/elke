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
}
else{
    $fellowId=-100;
};
if(isset($_GET['sciDirId'])){
    $sciDirId=$_GET['sciDirId'];
    $goon=true;
}else{
   $sciDirId=-100;
};
/*********/
/*$fellow_id=1;*/
$goon=true;
/*******/
$conn = mysqli_connect('localhost', "root", "qwe123", "elkedb");
$queryString='SELECT *,base_research.rec_id as base_research_rec_id  FROM base_scidir,base_fellow,base_fellow_per_scidir,'.
' base_research,base_research_per_scidir where'.
' base_fellow_per_scidir.fellow_id=base_fellow.rec_id and'.
' base_fellow_per_scidir.scidir_id=base_scidir.rec_id and'.
' base_research_per_scidir.scidir_id=base_scidir.rec_id and'.
' base_research_per_scidir.research_id=base_research.rec_id and'.
' base_fellow.fellow_code="'.$fellowId.'"'.
' and base_scidir.rec_id='.$sciDirId;
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
