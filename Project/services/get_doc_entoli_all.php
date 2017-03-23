<?php
//allow cross site http request
header("Access-Control-Allow-Origin: *");

header("Content-Type: application/json; charset=UTF-8");
//mysqli(mysql_server,username,pass,db)
$outp = "";
//if(isset($_GET['surname'])){
//    $surname=$_GET['surname'];
    $conn = mysqli_connect('localhost', "root", "qwe123", "elkedb");
    $queryString='select *,base_doc_entoli.rec_id as doc_entoli_id'.
    ' from base_doc_entoli,base_scidir,base_research,base_beneficiary,base_fellow,base_doc_entoli_type where'.
    ' base_doc_entoli.scidir_id=base_scidir.rec_id and'.
    ' base_doc_entoli.research_id=base_research.rec_id and'.
    ' base_doc_entoli.benef_id=base_beneficiary.rec_id and'.
    ' base_doc_entoli.fellow_id=base_fellow.rec_id and'.
    ' base_doc_entoli.entoli_type_id=base_doc_entoli_type.rec_id';
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
