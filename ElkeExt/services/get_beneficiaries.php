<?php
//allow cross site http request
header("Access-Control-Allow-Origin: *");

header("Content-Type: application/json; charset=UTF-8");
//mysqli(mysql_server,username,pass,db)
$outp = "";
//if(isset($_GET['surname'])){
//    $surname=$_GET['surname'];
    $conn = mysqli_connect('localhost', "root", "qwe123", "elkedb");
    $queryString='select *,base_beneficiary.rec_id as base_beneficiary_id'.
    ' from base_beneficiary';
    $queryString='select benef_afm as value,benef_surname as display'.
    ' from base_beneficiary';
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
