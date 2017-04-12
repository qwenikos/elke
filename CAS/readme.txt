1. Please edit the following config files in order to use your sso server

/app1/cas_config.php
/app2/cas_config.php

2. Make sure that "app?/certs/AddTrustExternalRoot.pem" is readable from the apache user.

3. Don't forget to register your appplication via CAS Services Management application (https://sso.xxx.gr/services)