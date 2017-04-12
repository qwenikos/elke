<?php
  include_once('CAS.php');	
  include_once('cas_config.php');
  phpCAS::client($cas_protocol, $cas_sso_server, $cas_port, '');
  phpCAS::setCasServerCACert($cas_cert); 	
  phpCAS::handleLogoutRequests(true , 
		               array($cas_sso_server));
  phpCAS::forceAuthentication();
  if (isset($_REQUEST['logout'])) {
    phpCAS::logout(array("service"=>$cas_logout_app_redirect_url));
  }		
?>
<!-- App1 | home.php -->
<html>
  <head>
	<meta charset="utf-8">
    <title>App1 | Advanced SAML 1.1 example</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <!-- End of Bootstrap head elements-->

    <link rel="stylesheet" href="../css/gstyle.css"> <!-- Geo CSS -->
    <link href='https://fonts.googleapis.com/css?family=Open+Sans&subset=latin,greek' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Raleway:400,300' rel='stylesheet' type='text/css'>
  </head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <body>

  <h4>App1 | Advanced SAML 1.1 example</h4>
  <div class="alert alert-success alert-margin" > phpCAS::logo
    <span class="glyphicon glyphicon-ok-circle"></span> 
    Authentication succeeded for user 
    <strong><?php echo phpCAS::getUser(); ?></strong>.
  </div>

  <h4>User Attributes</h4>
  <ul class="circle">		
  <?php
    foreach (phpCAS::getAttributes() as $key => $value) {
      if (is_array($value)) {
        echo '<li>', $key, ':<ol>';
        foreach ($value as $item) {
            echo '<li><strong>', $item, '</strong></li>';
        }
        echo '</ol></li>';
      } else {
        echo '<li>', $key, ': <strong>', $value, '</strong></li>' . PHP_EOL;
      }
    }
  ?>
  </ul>

  <div class="cas-version">
    <span class="glyphicon glyphicon-info-sign"></span> 
    phpCAS version is <b><?php echo phpCAS::getVersion(); ?></b>
  </div>
  <div class="logout-link"><a href="?logout=">Logout</a></div>

  </body>
</html>