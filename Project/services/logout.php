<?php
  include_once('CAS.php');	
  include_once('cas_config.php');
  phpCAS::client($cas_protocol, $cas_sso_server, $cas_port, '');
  phpCAS::setCasServerCACert($cas_cert); 	
  phpCAS::handleLogoutRequests(true ,array($cas_sso_server));
  phpCAS::forceAuthentication();
  if (isset($_REQUEST['logout'])) {
    phpCAS::logout(array("service"=>$cas_logout_app_redirect_url));
  }		
?>

