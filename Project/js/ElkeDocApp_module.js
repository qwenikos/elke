'use strict';

// declare modules
angular.module('Authentication', []);

var app=angular.module('ElkeDocApp', ['Authentication','ngRoute','ngCookies'])

///////// Create Controller with name submitedCtrl///////////////////
app.controller('submitedCtrl', function($scope,$http){
    //debugger;
	$scope.msg = 'You are now at submited us page';
	$scope.doc_entoli_num=1;
    var mylink='services/get_doc_entoli_all.php';
	var myparams='';
	//param='?surname='+surname;
	var fullurl=mylink+myparams;
	console.log(fullurl);
	$http.get(fullurl).then( //success
		function (response) {
			$scope.docEntoles = response.data;
		},
		function (response) { //fail
			$scope.error="error in proccessing";
		}
	);
});


app.controller('navigationController',function ($scope, $location, $rootScope, AuthenticationService) {
    //debugger;
    //$scope.isConnected = function() {
    //    return !($rootScope.globals.currentUser);
    //};
	
	$rootScope.$watch('globals', function(newVal, oldVal) {
            $scope.isConnected = !($rootScope.globals.currentUser);
    }, true);
	
	//$scope.isConnected=false;
    //console.log($scope.isConnected);
});


app.controller('ApplicationController', function($scope,$rootScope){
	$scope.userLoggedId =$rootScope.userid;
	console.log($rootScope.userid);
});

 ///////// route config //////////////////////////////
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'pages/login.html',
            hideMenus: true
        })
 
        .when('/', {
            controller: '',
            templateUrl: 'pages/home.html'
            //templateUrl: 'index1.html'
        })
		.when('/entoli', {
			templateUrl: 'pages/entoli.html',
			controller: 'contactCtrl'
		})
 
		.when('/docs',{
			templateUrl: 'pages/docs.html',
			controller: 'docsCtrl'
		})
 
		.when('/contact', {
			templateUrl: 'pages/contact.html',
			controller: 'contactCtrl'
		})
		
		.when('/submited_docs', {
			templateUrl: 'pages/submited.html',
			controller: 'submitedCtrl'
		})
		
        .otherwise({ redirectTo: '/login' });
}]);
	
 ///////////////////// run /////////////////////////////
app.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        console.log("you are in the run ");
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
    }]);

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
app.controller('menucontroller2', function($rootScope,$scope,$window){
	$scope.msg = 'You are now at docs us page';
    if ($rootScope.globals.currentUser === undefined){
        $scope.userLoggedMsg="Παρακαλώ Συνδεθείτε";
    }else{
        $scope.userLoggedMsg="logg";
        $scope.userLoggedMsg=$rootScope.globals.currentUser.username;
    };
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
		$window.location.href = 'pages/login.html';
		console.log("connect");
		
	};
	
});

////////////// Create Controller with name aboutCtrl//////////////////
 
app.controller('docsCtrl', function($scope){
	$scope.msg = 'You are now at docs us page';
});
 
///////// Create Controller with name contactCtrl///////////////////
 
app.controller('contactCtrl', function($scope){
	$scope.msg = 'Cotact us';
});
///////////////////////////////////
app.controller('mainCtrl', function($scope){
 
	$scope.msg = 'Wellcome to AngularJS Application Main Page';
});



////////////////////form controller///////////////////////////////////
app.controller('form_control',function($rootScope,$scope,$http) {
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
        var html_pre;
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
    
    $scope.msg = 'You are now at submited us page';
    console.log("you are in the controler testCtrl ");
    $scope.sciDirListData = {
        sciDirList: [
          {id: '1', name: 'SciDir A'},
          {id: '2', name: 'SciDir B'},
          {id: '3', name: 'SciDir C'}
        ]
    };
    $scope.researchListData = {
        researchList: [
          {id: '1', name: 'Reseach A'},
          {id: '2', name: 'Reseach B'},
          {id: '3', name: 'Reseach C'}
        ]
    };
    console.log($scope.researchListData);
    $scope.updateSciDirSelect = function(fellowId){
        var mylink='services/get_sci_for_fellow.php';
        //var fellowId=1;
        var myparams='?fellowId='+fellowId;
        //param='?surname='+surname;
        var fullurl=mylink+myparams;
        console.log(fullurl);
        $http.get(fullurl).then( //success
		function (response) {
			$scope.sciDirForFellow = response;
            console.log("ok");
            console.log($scope.sciDirForFellow);
		},
		function (response) { //fail
			$scope.error="error in proccessing";
            console.log("error");
		}
        );
        $scope.researchdiv=true;

        
    };
    $scope.updateResearchSelect = function(sciDirSelected,fellowId){
        var mylink='services/get_reseach_for_sci_dir_and_fellow.php';
        //var fellowId=1;
        //var sciDirId=sciDirSelected;
        var myparams='?fellowId='+fellowId+"&sciDirId="+sciDirSelected;
        //param='?surname='+surname;
        var fullurl=mylink+myparams;
        console.log(fullurl);
        $http.get(fullurl).then( //success
		function (response) {
			$scope.researchOfsciDirForFellow = response;
            console.log("ok");
            console.log($scope.researchOfsciDirForFellow);
		},
		function (response) { //fail
			$scope.error="error in proccessing";
            console.log("error");
		}
        );
        $scope.researchdiv=true;   
    };
    $scope.afterupdate = function(researchSelected,sciDirSelected,fellowId){
        var mylink='services/get_details_for_reseach_and_sci_dir_and_fellow.php';
        //var fellowId=1;
        //var sciDirId=sciDirSelected;
        var myparams='?fellowId='+fellowId+"&sciDirId="+sciDirSelected+"&researchId="+researchSelected;
        //param='?surname='+surname;
        var fullurl=mylink+myparams;
        console.log(fullurl);
        $http.get(fullurl).then( //success
		function (response) {
			$scope.DetailsForResearchAndSciDirForFellow = response;
            console.log("ok");
            console.log($scope.DetailsForResearchAndSciDirForFellow);
            $scope.entoli={
                epistimonikos_name: response.data[0].scidir_name+' '+response.data[0].scidir_surname,
                kodikos_ereynas: response.data[0].research_code
            };
            
		},
		function (response) { //fail
			$scope.error="error in proccessing";
            console.log("error");
		}
        );
        $scope.researchdiv=true;   
    };    
	
});

/////////////////////form controller end/////////////////////
app.controller("menucontroller1", function($scope) {
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

