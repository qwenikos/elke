'use strict';

// declare modules

angular.module('Authentication', []);

angular.module('BasicHttpAuthExample', ['Authentication','ngRoute','ngCookies'])

.controller('ApplicationController', function($scope,$rootScope){
	$scope.userLoggedId =$rootScope.userid;
	console.log($rootScope.userid);
})

 ///////// route config //////////////////////////////
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'pages/login.html',
            hideMenus: true
        })
 
        .when('/', {
            controller: 'ApplicationController',
            //templateUrl: 'pages/home.html'
            templateUrl: 'index1.html'
        })
 
        .otherwise({ redirectTo: '/login' });
}])
 ///////////////////// run /////////////////////////////
.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }])

///////////// menu controler 2 ///////////////////////
.controller('menucontroller2', function($scope,$window){
	$scope.msg = 'You are now at docs us page';
	$scope.sub_menu_arxiki_show = function() {
		/*alert('sub_menu_arxiki_show');*/
		$scope.sub_menu_arxiki=false;
		$scope.sub_menu_entypa=false;
		$scope.sub_menu_entoli=false;
		$scope.sub_menu_epikoinonia=false;
	};
	$scope.sub_menu_entypa_show = function() {
		/*alert('sub_menu_entypa_show');*/
		$scope.sub_menu_arxiki=false;
		$scope.sub_menu_entypa=true;
		$scope.sub_menu_entoli=false;
		$scope.sub_menu_epikoinonia=false;
	};
	$scope.sub_menu_entoli_show = function() {
		/*alert('sub_menu_entoli_show');*/
		$scope.sub_menu_arxiki=false;
		$scope.sub_menu_entypa=false;
		$scope.sub_menu_entoli=true;
		$scope.sub_menu_epikoinonia=false;
	};
	$scope.sub_menu_epikoinonia_show = function() {
		/*alert('sub_menu_epikoinonia_show');*/
		$scope.sub_menu_arxiki=false;
		$scope.sub_menu_entypa=false;
		$scope.sub_menu_entoli=false;
		$scope.sub_menu_epikoinonia=true;
	};
	$scope.sub_menu_login = function() {
		$window.location.href = 'login.html';
		console.log("connect");
		
	};
	
})

////////////// Create Controller with name aboutCtrl//////////////////
 
.controller('docsCtrl', function($scope){
	$scope.msg = 'You are now at docs us page';
})
 
///////// Create Controller with name contactCtrl///////////////////
 
.controller('contactCtrl', function($scope){
	$scope.msg = 'Cotact us';
})
///////////////////////////////////
.controller('mainCtrl', function($scope){
 
	$scope.msg = 'Wellcome to AngularJS Application Main Page';
})
///////// Create Controller with name submitedCtrl///////////////////
.controller('submitedCtrl', function($scope,$http){
	$scope.msg = 'You are now at submited us page';
	$scope.doc_entoli_num=1;	
	site='services/get_doc_entoli_all.php';
	param='';
	//param='?surname='+surname;
	fullurl=site+param;
	console.log(fullurl);
	$http.get(fullurl).then( //success
		function (response) {
			$scope.docEntoles = response.data;
		},
		function (response) { //fail
			$scope.error="error in proccessing";
		}
	);
})

////////////////////form controller///////////////////////////////////
.controller('form_control',function($scope) {
    //initialization
    $scope.commonfields_form=true;
    $scope.amoivi_form=false;
    $scope.prokatavoli_form=false;
    $scope.exoda_ereynwn_form=false;
    $scope.doc_amoivi=false;
    $scope.doc_prokatavoli=false;
    $scope.doc_exoda_ereynwn=false;
    $scope.doc_amoivi_empty=true;
    $scope.doc_prokatavoli_empty=true;
    $scope.doc_exoda_ereynwn_empty=true;
    $scope.users = [
        {_id:1, name:'User 1'},
        {_id:2, name:'User 2'},
        {_id:3, name:'User 3'}
    ];
    $scope.doctypes = [
        {did:1, name:'Αμοιβή'},
        {did:2, name:'Προκαταβολή'},
        {did:3, name:'Έξοδα Ερευνών'}
    ];
    console.log($scope.users);
    //print adiv function
    $scope.printDiv = function(divName) {
      var printContents = document.getElementById(divName).innerHTML;
      var popupWin = window.open('', '_blank', 'width=595,height=842');
      popupWin.document.open();

		html_pre='<html><head>';
	  	html_pre+='<link rel="stylesheet" type="text/css" href="css/uoashare.css">';
		html_pre+='<link rel="stylesheet" type="text/css" href="css/nikos_tables.css">';
		html_pre+='<link rel="stylesheet" type="text/css" href="css/nikos_base.css">';
		html_pre+='<link rel="stylesheet" type="text/css" href="css/nikos_nav.css">';
		html_pre+='<script src="./js/angularjs/1.5.7/angular.min.js"></script>';
		html_pre+='<script src="./js/app_routing.js"></script>';
		html_pre+='</head>';
      popupWin.document.write(html_pre+ '<body onload="window.print()">' + printContents + '</body></html>');
      popupWin.document.close();
    };
    $scope.changeme = function() {
    alert('here');
    };
    $scope.agora_clicked = function() {
    //alert('agora');
    $scope.entoli.check_diagonismos=false;
    };
    $scope.diagonismos_clicked = function() {
    //alert('diagonisnos');
    $scope.entoli.check_agora=false;
    };
    $scope.showdivfortype = function(divname) {
    //alert(divname);
        if (divname=='1'){
            $scope.amoivi_form=true;
            $scope.doc_amoivi=true;
            $scope.doc_amoivi_empty=false;
           
            $scope.prokatavoli_form=false;
            $scope.doc_prokatavoli=false;
            $scope.doc_prokatavoli_empty=true;
            
            $scope.exoda_ereynwn_form=false;
            $scope.doc_exoda_ereynwn=false;
            $scope.doc_exoda_ereynwn_empty=true;
        }
        if (divname=='2'){
            $scope.amoivi_form=false;
            $scope.doc_amoivi=false;
            $scope.doc_amoivi_empty=true;
           
            $scope.prokatavoli_form=true;
            $scope.doc_prokatavoli=true;
            $scope.doc_prokatavoli_empty=false;
            
            $scope.exoda_ereynwn_form=false;
            $scope.doc_exoda_ereynwn=false;
            $scope.doc_exoda_ereynwn_empty=true;
        }
        if (divname=='3'){
            $scope.amoivi_form=false;
            $scope.doc_amoivi=false;
            $scope.doc_amoivi_empty=true;
           
            $scope.prokatavoli_form=false;
            $scope.doc_prokatavoli=false;
            $scope.doc_prokatavoli_empty=true;
            
            $scope.exoda_ereynwn_form=true;
            $scope.doc_exoda_ereynwn=true;
            $scope.doc_exoda_ereynwn_empty=false;
            
        }         
    };    
})
/////////////////////form controller end/////////////////////
.controller("menucontroller1", function($scope) {
  $scope.menus = [
	{
	  title: "Menu1", 
	  action: "#", 
	  menus: [
		{
		  title: "Submenu 1a",
		  action: "stuff"
		},
		{
		  title: "Submenu 1b",
		  action: "moreStuff",
		  menus: [
			{
			  title: "Submenu 1b 1",
			  action: "stuff"
			},
			{
			  title: "Submenu 1b 2",
			  action: "moreStuff"
			}
		  ]
		}
	  ]
	},
	{
    title: "Menu2", 
    action: "#", 
    menus: [
      {
        title: "Submenu 2a",
        action: "awesomeStuff"
      },
      {
        title: "Submenu 2b",
        action: "moreAwesomeStuff"
      }
    ]
	}
	];
  });
///////////////////////END END END ///////////////////////////////