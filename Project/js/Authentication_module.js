'use strict';

angular.module('Authentication',[])



.controller('LoginController',
    ['$scope', '$rootScope','$window', '$location', 'AuthenticationService',
    function ($scope, $rootScope,$window, $location, AuthenticationService) {

        console.log("you are in the login controller");
        AuthenticationService.ClearCredentials();
        
        $scope.unameIs=function(unameFromCAS){
                console.log("in the unameIsFunction");
                $scope.username=unameFromCAS;
                //$window.document.title="Change user"+$scope.username;
                console.log("userName from CAS----->"+$scope.username);
                login($scope.username,"dummypass");
                
                
                
            };
        
        //$scope.logout=function(){
        //        console.log("in the logoutFunction");
        //       console.log("LOGOUT");   
        //    };
       // console.log("uname==="+$scope.username );
       // if ($scope.username==="" || $scope.username===undefined){
       //     console.log("not logged");
       // }else{
       //     console.log("logged");
        //    console.log($scope.username);
       //     login($scope.uname,"dummypass");
       // }

        function login (username,password) {
                console.log("you are in the login function");
                $scope.dataLoading = true;
                AuthenticationService.SetCredentials(username,password);
                
                //$location.path('#/home');
                $window.top.location="http://192.168.21.90/nikos/elke/Project/start_page.html";
                //$scope.uname="";

        };
        //function logout (username,password) {
        //        console.log("you are in the logout function");
        //        $scope.dataLoading = true;
        //        AuthenticationService.ClearCredentials();
        //        $location.path('/');
        //        //$window.top.location="/nikos/elke/Project/start_page.html";
        //        $http.post('/services/logout.php?logout');
        //};
    
    }

    
    ])
  
 
 
.factory('AuthenticationService',['Base64', '$http', '$cookieStore', '$rootScope', '$timeout',function (Base64, $http, $cookieStore, $rootScope, $timeout) {
    var service = {};

    service.SetCredentials = function (username, password) {
        console.log("Setting Credentials");
        var authdata = Base64.encode(username + ':' + password);

        $rootScope.globals = {
            currentUser: {
                username: username,
                authdata: authdata
            }
        };

        $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
        //$http.defaults.headers.common['auth-token'] = 'C3PO R2D2';
        $cookieStore.put('globals', $rootScope.globals);
        
    };

    service.ClearCredentials = function () {
        console.log("clearing Credentials");
        $rootScope.globals = {};
        $cookieStore.remove('globals');
        $http.defaults.headers.common.Authorization = 'Basic ';
    };

    return service;
}])

.factory('Base64', function () {
    /* jshint ignore:start */
 
    var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
 
    return {
        encode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;
 
            do {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);
 
                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;
 
                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }
 
                output = output +
                    keyStr.charAt(enc1) +
                    keyStr.charAt(enc2) +
                    keyStr.charAt(enc3) +
                    keyStr.charAt(enc4);
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
            } while (i < input.length);
 
            return output;
        },
 
        decode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;
 
            // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
            var base64test = /[^A-Za-z0-9\+\/\=]/g;
            if (base64test.exec(input)) {
                window.alert("There were invalid base64 characters in the input text.\n" +
                    "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                    "Expect errors in decoding.");
            }
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
 
            do {
                enc1 = keyStr.indexOf(input.charAt(i++));
                enc2 = keyStr.indexOf(input.charAt(i++));
                enc3 = keyStr.indexOf(input.charAt(i++));
                enc4 = keyStr.indexOf(input.charAt(i++));
 
                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;
 
                output = output + String.fromCharCode(chr1);
 
                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }
 
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
 
            } while (i < input.length);
 
            return output;
        }
    };
 
    /* jshint ignore:end */
});

