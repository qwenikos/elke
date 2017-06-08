<?php
    if (!isset($_SESSION)){    
        session_start();
        $_SESSION['userid']="";
        $_SESSION['loggedIn'] =false ;
    }    
    /*start here will go the login script and return the uid*/
    $uid=10;
    $loggedIn=true;
    /* end here will go the login script*/
    
    $_SESSION['loggedIn'] =$loggedIn ;
    $_SESSION['userid']=$uid;
    if ($loggedIn==true){
        $sessions = array();
        /*create json oblect to send back to pagage */
        $sessions['variable'] = $_SESSION['variable'];
        $sessions['userid'] = $_SESSION['userid'];
        header('Content-Type: application/json');
        echo json_encode($sessions);
    }
    else {
       die("Invalid login");
    }

?>
