<?php
//header("Access-Control-Allow-Origin: *");
//header("Content-Type: application/json; charset=UTF-8");
    $postdata = file_get_contents("php://input");
    if (isset($postdata)){
        $request = json_decode($postdata);
        if (property_exists($request,"sciDirSelected")){$sciDirSelected =$request->sciDirSelected ; }else{$sciDirSelected = '';};
        if (property_exists($request,"researchSelected")){$researchSelected =$request->researchSelected ; }else{$researchSelected = '';};
        if (property_exists($request,"epistimonikos_name")){$epistimonikos_name =$request->epistimonikos_name ; }else{$epistimonikos_name = '';};
        if (property_exists($request,"xrimatodotis")){$xrimatodotis =$request->xrimatodotis ; }else{$xrimatodotis = '';};
        if (property_exists($request,"poso_proypologismou")){$poso_proypologismou =$request->poso_proypologismou ; }else{$poso_proypologismou = '';};
        if (property_exists($request,"ergo_apo")){$ergo_apo =$request->ergo_apo ; }else{$ergo_apo = '';};
        if (property_exists($request,"ergo_eos")){$ergo_eos =$request->ergo_eos ; }else{$ergo_eos = '';};
        
        if (property_exists($request,"table_1A")){$table_1A =$request->table_1A ; }else{$table_1A = '';};
        if (property_exists($request,"table_1B")){$table_1B =$request->table_1B ; }else{$table_1B = '';};
        if (property_exists($request,"table_1G")){$table_1G =$request->table_1G ; }else{$table_1G = '';};
        if (property_exists($request,"table_1D")){$table_1D =$request->table_1D ; }else{$table_1D = '';};
        if (property_exists($request,"table_1E")){$table_1E =$request->table_1E ; }else{$table_1E = '';};
        if (property_exists($request,"table_1ST")){$table_1ST =$request->table_1ST ; }else{$table_1ST = '';};
        if (property_exists($request,"table_1Z")){$table_1Z =$request->table_1Z ; }else{$table_1Z = '';};
        if (property_exists($request,"table_1H")){$table_1H =$request->table_1H ; }else{$table_1H = '';};
        if (property_exists($request,"table_1T")){$table_1T =$request->table_1T ; }else{$table_1T = '';};
        if (property_exists($request,"table_1IA")){$table_1IA =$request->table_1IA ; }else{$table_1IA = '';};
        if (property_exists($request,"table_1I")){$table_1I =$request->table_1I ; }else{$table_1I = '';};
        if (property_exists($request,"table_2A")){$table_2A =$request->table_2A ; }else{$table_2A = '';};
        if (property_exists($request,"table_2B")){$table_2B =$request->table_2B ; }else{$table_2B = '';};
        if (property_exists($request,"table_2G")){$table_2G =$request->table_2G ; }else{$table_2G = '';};
        if (property_exists($request,"table_2D")){$table_2D =$request->table_2D ; }else{$table_2D = '';};
        if (property_exists($request,"table_2E")){$table_2E =$request->table_2E ; }else{$table_2E = '';};
        if (property_exists($request,"table_2ST")){$table_2ST =$request->table_2ST ; }else{$table_2ST = '';};
        if (property_exists($request,"table_2Z")){$table_2Z =$request->table_2Z ; }else{$table_2Z = '';};
        if (property_exists($request,"table_2H")){$table_2H =$request->table_2H ; }else{$table_2H = '';};
        if (property_exists($request,"table_2T")){$table_2T =$request->table_2T ; }else{$table_2T = '';};
        if (property_exists($request,"table_2I")){$table_2I =$request->table_2I ; }else{$table_2I = '';};
        if (property_exists($request,"table_2KA")){$table_2KA =$request->table_2KA ; }else{$table_2KA = '';};
        if (property_exists($request,"table_2K")){$table_2K =$request->table_2K ; }else{$table_2K = '';};
        if (property_exists($request,"table_3A")){$table_3A =$request->table_3A ; }else{$table_3A = '';};
        if (property_exists($request,"table_3B")){$table_3B =$request->table_3B ; }else{$table_3B = '';};
        if (property_exists($request,"table_3G")){$table_3G =$request->table_3G ; }else{$table_3G = '';};
        if (property_exists($request,"table_3D")){$table_3D =$request->table_3D ; }else{$table_3D = '';};
        if (property_exists($request,"table_3EA")){$table_3EA =$request->table_3EA ; }else{$table_3EA = '';};
        if (property_exists($request,"table_3E")){$table_3E =$request->table_3E ; }else{$table_3E = '';};
        if (property_exists($request,"table_4A")){$table_4A =$request->table_4A ; }else{$table_4A = '';};
        if (property_exists($request,"table_4B")){$table_4B =$request->table_4B ; }else{$table_4B = '';};
        if (property_exists($request,"table_4G")){$table_4G =$request->table_4G ; }else{$table_4G = '';};
        if (property_exists($request,"table_4D")){$table_4D =$request->table_4D ; }else{$table_4D = '';};
        if (property_exists($request,"table_4EA")){$table_4EA =$request->table_4EA ; }else{$table_4EA = '';};
        if (property_exists($request,"table_4E")){$table_4E =$request->table_4E ; }else{$table_4E = '';};
        if (property_exists($request,"table_5A")){$table_5A =$request->table_5A ; }else{$table_5A = '';};
        if (property_exists($request,"table_5B")){$table_5B =$request->table_5B ; }else{$table_5B = '';};
        if (property_exists($request,"table_5G")){$table_5G =$request->table_5G ; }else{$table_5G = '';};
        if (property_exists($request,"table_5DA")){$table_5DA =$request->table_5DA ; }else{$table_5DA = '';};
        if (property_exists($request,"table_5D")){$table_5D =$request->table_5D ; }else{$table_5D = '';};
        if (property_exists($request,"table_6A")){$table_6A =$request->table_6A ; }else{$table_6A = '';};
        if (property_exists($request,"table_6B")){$table_6B =$request->table_6B ; }else{$table_6B = '';};
        if (property_exists($request,"table_6G")){$table_6G =$request->table_6G ; }else{$table_6G = '';};
        if (property_exists($request,"table_6D")){$table_6D =$request->table_6D ; }else{$table_6D = '';};
        if (property_exists($request,"table_6EA")){$table_6EA =$request->table_6EA ; }else{$table_6EA = '';};
        if (property_exists($request,"table_6E")){$table_6E =$request->table_6E ; }else{$table_6E = '';};
        if (property_exists($request,"table_7A")){$table_7A =$request->table_7A ; }else{$table_7A = '';};
        if (property_exists($request,"table_7B")){$table_7B =$request->table_7B ; }else{$table_7B = '';};
        if (property_exists($request,"table_7E")){$table_7E =$request->table_7E ; }else{$table_7E = '';};
        if (property_exists($request,"table_7D")){$table_7D =$request->table_7D ; }else{$table_7D = '';};
        if (property_exists($request,"table_7DA")){$table_7DA =$request->table_7DA ; }else{$table_7DA = '';};
        if (property_exists($request,"table_8A")){$table_8A =$request->table_8A ; }else{$table_8A = '';};
        if (property_exists($request,"table_9A1")){$table_9A1 =$request->table_9A1 ; }else{$table_9A1 = '';};
        if (property_exists($request,"table_9A2")){$table_9A2 =$request->table_9A2 ; }else{$table_9A2 = '';};
        if (property_exists($request,"budget_resp_name")){$budget_resp_name =$request->budget_resp_name ; }else{$budget_resp_name = '';};
        if (property_exists($request,"budget_resp_tel")){$budget_resp_tel =$request->budget_resp_tel ; }else{$budget_resp_tel = '';};
        if (property_exists($request,"budget_resp_email")){$budget_resp_email =$request->budget_resp_email ; }else{$budget_resp_email = '';};

        
        
        
        //if (property_exists($request,"dikaioyxos_afm")){$dikaioyxos_afm =$request->dikaioyxos_afm ; }else{$dikaioyxos_afm = 'NULL';};
        //if (property_exists($request,"dikaioyxos_name")){$dikaioyxos_name =$request->dikaioyxos_name ; }else{$dikaioyxos_name = 'NULL';};
        ///*if (property_exists($request,"typos")){if (property_exists($request->typos,"did")){$typos =$request->typos->did ; }} else{$typos= 'NULL';}*/
        //if (property_exists($request,"typos")){$typos =$request->typos ; }else{$typos = 'NULL';};
        //if (property_exists($request,"amoivi_diasthma_apo")){$amoivi_diasthma_apo =$request->amoivi_diasthma_apo ; }else{$amoivi_diasthma_apo = 'NULL';};
        //if (property_exists($request,"amoivi_diasthma_eos")){$amoivi_diasthma_eos =$request->amoivi_diasthma_eos ; }else{$amoivi_diasthma_eos = 'NULL';};
        //if (property_exists($request,"amoivi_poso")){$amoivi_poso =$request->amoivi_poso ; }else{$amoivi_poso = 'NULL';};
        //if (property_exists($request,"prokatavoli_poso")){$prokatavoli_poso =$request->prokatavoli_poso ; }else{$prokatavoli_poso = 'NULL';};
        //if (property_exists($request,"prokatavoli_desc")){$prokatavoli_desc =$request->prokatavoli_desc ; }else{$prokatavoli_desc = 'NULL';};
        
        //if (property_exists($request,"exoda_ereynwn_desc")){$exoda_ereynwn_desc =$request->exoda_ereynwn_desc ; }else{$exoda_ereynwn_desc = 'NULL';};
        //if (property_exists($request,"exoda_ereynwn_poso")){$exoda_ereynwn_poso =$request->exoda_ereynwn_poso ; }else{$exoda_ereynwn_poso = 'NULL';};
        //if (property_exists($request,"check_agora")){$check_agora =$request->check_agora; }else{$check_agora = "0";};
        //if (property_exists($request,"check_diagonismos")){$check_diagonismos =$request->check_diagonismos ; }else{$check_diagonismos = "0";};
     
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
/* change character set to utf8 */
if (!$conn->set_charset("utf8")) {
    printf("Error loading character set utf8: %s\n", $mysqli->error);
    exit();
}
/*
$sql = "INSERT INTO base_beneficiary (benef_name, benef_surname, benef_afm, benef_desc)
VALUES ('$emp_no', '$first_name', '$last_name' , '$dept_name')";
*/

$protocolNumberString="";
$SubmitterEmail="nikosp@di.uoa.gr";
$timestamp=date('Y-m-d H:i:s');
$protocol_sql="INSERT INTO base_protocol (submit_email,timestamp) VALUES ('$SubmitterEmail','$timestamp')";
if ($conn->query($protocol_sql) === TRUE) {
    printf ("New protocol_rec_id has id %d.\n", $conn->insert_id);
    $protocol_rec_id=$conn->insert_id;
    
    $today = date("Ymd");  
    $doc_protocol=$today."-".$protocol_rec_id;
    echo "--->".$doc_protocol."\n";
    $sql="INSERT INTO base_doc_proypologismos (scidir_id, research_id, financier, budget_amount,".
    "contact_start, contract_end, table_1A, table_1B, table_1G, table_1D, table_1E, table_1ST,table_1Z,".
    " table_1H, table_1T,table_1IA, table_1I, table_2A, table_2B, table_2G,table_2D, table_2E, table_2ST, table_2Z,".
    " table_2H, table_2T, table_2I, table_2KA,table_2K, table_3A, table_3B, table_3G, table_3D, table_3EA,".
    " table_3E, table_4A, table_4B, table_4G, table_4D, table_4EA,table_4E, table_5A, table_5B,".
    " table_5G, table_5DA, table_5D, table_6A, table_6B, table_6G, table_6D, table_6EA, table_6E,".
    "table_7A, table_7B, table_7E,table_7D, table_7DA, table_8A, table_9A1, table_9A2,".
    " budget_resp_name, budget_resp_tel,budget_resp_email)".
    "VALUES".
    "($sciDirSelected, $researchSelected,'$xrimatodotis','$poso_proypologismou',".
    "'$ergo_apo','$ergo_eos' , '$table_1A', '$table_1B', '$table_1G', '$table_1D', '$table_1E', '$table_1ST','$table_1Z',".
    " '$table_1H','$table_1T','$table_1IA','$table_1I','$table_2A','$table_2B','$table_2G','$table_2D','$table_2E','$table_2ST','$table_2Z',".
    " '$table_2H','$table_2T','$table_2I','$table_2KA','$table_2K','$table_3A','$table_3B','$table_3G','$table_3D', '$table_3EA',".
    "'$table_3E', '$table_4A', '$table_4B', '$table_4G', '$table_4D', '$table_4EA', '$table_4E', '$table_5A', '$table_5B',".
    " '$table_5G', '$table_5DA', '$table_5D', '$table_6A', '$table_6B', '$table_6G', '$table_6D', '$table_6EA', '$table_6E',".
    " '$table_7A', '$table_7B', '$table_7E', '$table_7D', '$table_7DA', '$table_8A', '$table_9A1', '$table_9A2',".
    " '$budget_resp_name', '$budget_resp_tel', '$budget_resp_email');";
    
    //$sql="INSERT INTO base_doc_proypologismos (scidir_id,research_id,benef_afm,fellow_id,entoli_type_id,paymentof,payment_start_period,peyment_end_period,payment_amount,advance_peyment_desc,advance_payment_amount,research_expenses_desc,reseach_expenses_amount,market_eval,legal_process,doc_protocol)
    //VALUES ( $sciDirSelected, $researchSelected, '$dikaioyxos_afm', '1', $typos, '$dikaioyxos_afm', '$amoivi_diasthma_apo', '$amoivi_diasthma_eos', $amoivi_poso,'$prokatavoli_desc',$prokatavoli_poso, '$exoda_ereynwn_des',$exoda_ereynwn_poso,$check_agora,$check_diagonismos,'$doc_protocol')";
    
    echo $sql;
    
    
    if ($conn->query($sql) === TRUE) {
        /* get protocol */
        printf ("New Record has id %d.\n", $conn->insert_id);  
        echo "New record created successfully with protocol=<<$protocolNumberString>>";
    }
    else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
}

$conn->close();
?>
