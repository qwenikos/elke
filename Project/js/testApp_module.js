'use strict';


var app=angular.module('testApp', [])

///////// Create Controller with name submitedCtrl///////////////////
app.controller('testCtrl', function($rootScope,$scope,$http){
    //debugger;
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
	
});

app.run(['$rootScope', '$location', '$http', function ($scope,$rootScope, $location, $http) {
        console.log("you are in the run ");
        $scope.researchdiv=false;
        $rootScope.sciDir=-1;
    }
]);

////////////////////////////////////////////////////////