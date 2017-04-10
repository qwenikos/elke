'use strict';

// declare modules
angular.module('Authentication', []);
var app=angular.module('ElkeDocApp', ['Authentication','ngRoute','ngCookies','ngMaterial', 'ngMessages', 'material.svgAssetsCache'])


/////###############  RUN ####################/////	
app.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        console.log("you are in the run ");
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
        ////check if the route   changes///
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }
]);


/////############route config################/////

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


/////##########################################/////
 
app.controller('docsCtrl', function($scope){
	$scope.msg = 'You are now at docs us page';
});
 
/////##########################################/////
 
app.controller('contactCtrl', function($scope){
	$scope.msg = 'Cotact us';
});

/////##########################################/////

app.controller('mainCtrl', function($scope){
 
	$scope.msg = 'Wellcome to AngularJS Application Main Page';
});

/////##########################################/////

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
/////##########################################/////

app.controller('navigationController',function ($scope, $location, $rootScope, AuthenticationService) {
	
	$rootScope.$watch('globals', function(newVal, oldVal) {
            $scope.isConnected = !($rootScope.globals.currentUser);
    }, true);
});

/////##########################################/////

/*app.controller('ApplicationController', function($scope,$rootScope){
	$scope.userLoggedId =$rootScope.userid;
	console.log($rootScope.userid);
});*/


/////##########################################/////

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


/////############ FORM CONTROLLER##################/////

app.controller('form_control',function($rootScope,$scope,$http,$log,$mdDialog) {
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
    
    $scope.insertDocToDB = function() {
        console.log($scope.entoli);
        console.log("in the sinsertDocToDB");
        
        var actionUrl="services/insert_doc_into_db.php";
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        $http.post(actionUrl,$scope.entoli,config).then( //success
            function (response) {
                console.log(response);
                $scope.insertDocToMysqlReturn = response.data;
            },
            function (response) { //fail
            }
        );
        console.log($scope.insertDocToMysqlReturn);
    };    

    $scope.changeme = function() {
    };
    
    $scope.agora_clicked = function() {
        $scope.entoli.check_diagonismos=false;
    };
    
    $scope.diagonismos_clicked = function() {
        $scope.entoli.check_agora=false;
    };
    
    $scope.showdivfortype = function(divname) {
        $scope.entoli.typos=divname;
        console.log("type changed to "+divname);
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
        console.log(researchSelected,sciDirSelected,fellowId)
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
            if (response.data[0]){
                $scope.entoli={
                    epistimonikos_name: response.data[0].scidir_name+' '+response.data[0].scidir_surname,
                    kodikos_ereynas: response.data[0].research_code,
                    sciDirId:   sciDirSelected,
                    researchId: researchSelected,
                    sciDirSelected:sciDirSelected ,
                    researchSelected: researchSelected
                };
            
            }
            
		},
		function (response) { //fail
			$scope.error="error in proccessing";
            console.log("error");
		}
        );
        $scope.researchdiv=true;   
    };
    ////start autocompete part for benef autocomplete
    
    $scope.disable_benef_input=true;
	console.log("in the contoller");
	//var self = this;
	$scope.sub_div_add_beneficiary=false;
	$scope.isDisabled   = false;
	var fellowId='1';
	var action='services/get_beneficiaries.php';
	var params='?fellowId='+fellowId;
	var fulURL=action+params;

	$scope.querySearch   = querySearch;
	$scope.selectedItemChange = selectedItemChange;
	$scope.searchTextChange   = searchTextChange;	
	$scope.insertBenef = insertBenef;
	
	$http.get(fulURL).then( //success
		function (response) {
			console.log("in the httpGet");
			$scope.posts =  response.data;
			console.log($scope.posts);
			$scope.states=$scope.posts;
			//create new beneficiary
		},
		function (response) { //fail
			$scope.error="error in proccessing";
		}
	);
	$scope.insert_new_benef=function(){
		console.log("insert new benef to database");
		$scope.mytestdata='nikos';
		$mdDialog.hide();
	};
	console.log("END");
	function insertBenef ($event) {
		console.log("in insertBenef function");
		$mdDialog.show({
			scope: $scope,
			preserveScope: true,
			controller: 'form_control',
			templateUrl: 'pages/insert_new_benef_dialog.html'
        });
	}

	function querySearch (query) {
		console.log("test0");
	  var results;
	  if (query){
		results=$scope.states.filter( createFilterFor(query));
	  }else{
	   results= $scope.states;
	  }
	  return results; 
	}
  
	function createFilterFor(query) {
		console.log("test1");
	  return function filterFn(benef) {
		return (benef.value.indexOf(query) === 0);
		
	  };
	}

	function searchTextChange(text) {
		console.log("test2");
		if (text.length==11) {
		alert("Whatt");	
		}
	}
	
	function selectedItemChange(item) {
		console.log("test3");
		if (item){
           $scope.entoli.dikaioyxos_afm=item.value;
           $scope.entoli.dikaioyxos_name=item.display;
			$scope.new_benef_name=item.display;
			$scope.new_benef_afm=item.value;
			$scope.disable_benef_input=true;
		}
	}
    ///end autocomplete part
	
});


///////////////////////END END END ///////////////////////////////

