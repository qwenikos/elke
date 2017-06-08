<?php
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

$outp = "";
//if(isset($_GET['surname'])){
//    $surname=$_GET['surname'];
    $conn = mysqli_connect('localhost', "root", "qwe123", "elkedb");
    $queryString='  SELECT *,base_doc_proypologismos.rec_id as proypologismos_rec_id  FROM'.
                 '   base_doc_proypologismos,base_scidir,base_research'.
                 '   where'.
                 '   base_doc_proypologismos.scidir_id=base_scidir.rec_id and'.
                 '   base_doc_proypologismos.research_id=base_research.rec_id and'.
                 '   base_doc_proypologismos.research_id in ('.
                 '   select base_fellow_per_research.reseach_id from base_fellow_per_research where rec_id in ('.
                 '   select base_fellow.rec_id from base_fellow where fellow_code="'.$fellowId.'"'.
                 '    )'.
                 '   )';

//print $queryString;
    $result = mysqli_query($conn,$queryString);
    $data=array();
    //error_log($queryString."\n",3,"/var/tmp/php-mysql.log");
    while($row=mysqli_fetch_array($result)) {
        #foreach ($row as $key=>$value){
        #    if (is_null($value)){
        #        $row[$key]="---";
        #    }
        #    #echo  $row[$key]."\n";
        #}
        $data[]=$row;
    }
    
//}

echo json_encode($data);
mysqli_close($conn);
?>
