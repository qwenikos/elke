<?php
//header("Access-Control-Allow-Origin: *");
//header("Content-Type: application/json; charset=UTF-8");
    $postdata = file_get_contents("php://input");
    if (isset($postdata)){
        $request = json_decode($postdata);
        if (property_exists($request,"sciDirSelected")){$sciDirSelected =$request->sciDirSelected ; }else{$sciDirSelected = "";};
        if (property_exists($request,"researchSelected")){$researchSelected =$request->researchSelected ; }else{$researchSelected = "";};
        if (property_exists($request,"epistimonikos_name")){$epistimonikos_name =$request->epistimonikos_name ; }else{$epistimonikos_name = "";};
        if (property_exists($request,"kodikos_ereynas")){$kodikos_ereynams =$request->kodikos_ereynas ; }else{$kodikos_ereynas = "";};
        if (property_exists($request,"dikaioyxos_afm")){$dikaioyxos_afm =$request->dikaioyxos_afm ; }else{$dikaioyxos_afm = "";};
        if (property_exists($request,"dikaioyxos_name")){$dikaioyxos_name =$request->dikaioyxos_name ; }else{$dikaioyxos_name = "";};
        if (property_exists($request,"typos")){if (property_exists($request->typos,"did")){$typos =$request->typos->did ; }} else{$typos= "";}
        
        if (property_exists($request,"amoivi_diasthma_apo")){$amoivi_diasthma_apo =$request->amoivi_diasthma_apo ; }else{$amoivi_diasthma_apo = "";};
        if (property_exists($request,"amoivi_diasthma_eos")){$amoivi_diasthma_eos =$request->amoivi_diasthma_eos ; }else{$amoivi_diasthma_eos = "";};
        if (property_exists($request,"amoivi_poso")){$amoivi_poso =$request->amoivi_poso ; }else{$amoivi_poso = "";};
        if (property_exists($request,"prokatavoli_poso")){$prokatavoli_poso =$request->prokatavoli_poso ; }else{$prokatavoli_poso = "";};
        if (property_exists($request,"prokatavoli_desc")){$prokatavoli_desc =$request->prokatavoli_desc ; }else{$prokatavoli_desc = "";};
        
        if (property_exists($request,"exoda_ereynwn_desc")){$exoda_ereynwn_desc =$request->exoda_ereynwn_desc ; }else{$exoda_ereynwn_desc = "";};
        if (property_exists($request,"exoda_ereynwn_poso")){$exoda_ereynwn_poso =$request->exoda_ereynwn_poso ; }else{$exoda_ereynwn_poso = "";};
        if (property_exists($request,"check_agora")){$check_agora =$request->check_agora; }else{$check_agora = "0";};
        if (property_exists($request,"check_diagonismos")){$check_diagonismos =$request->check_diagonismos ; }else{$request->check_agoracheck_diagonismos = "0";};

        
       //echo  $researchSelect,$epistimonikos_name,$kodikos_ereynams ,$diakioyxos_afm ,$dikaioyxos_name , $typos ,$amoivi_diasthma_apo , $amoivi_diasthma_eos,$amoivi_poso ,$prokatavoli_descprokatavoli_poso,$exoda_ereynwn_desc ,$exoda_ereynwn_poso,$check_agora,$check_diagonismos;

    }


$servername = "localhost";
$username = "root";
$password = "qwe123"; //Your User Password
$dbname = "elkedb"; //Your Database Name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql="INSERT INTO base_doc_entoli (scidir_id,research_id,benef_id,fellow_id,entoli_type_id,paymentof,payment_start_period,peyment_end_period,payment_amount,advance_peyment_desc,advance_payment_amount,research_expenses_desc,reseach_expenses_amount,market_eval,legal_process)
VALUES ( $sciDirSelected, $researchSelected, $dikaioyxos_afm, '1', $typos, $diakioyxos_afm, $amoivi_diasthma_apo, $amoivi_diasthma_eos, $amoivi_poso, $prokatavoli_poso, $prokatavoli_desc, $exoda_ereynwn_desc, $exoda_ereynwn_poso, $check_agora, $check_diagonismos)";
echo $sql;
/*
$sql = "INSERT INTO base_beneficiary (benef_name, benef_surname, benef_afm, benef_desc)
VALUES ('$emp_no', '$first_name', '$last_name' , '$dept_name')";


if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
*/
$conn->close();
?>
