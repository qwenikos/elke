'use strict';


var app=angular.module('testApp', [])

///////// Create Controller with name submitedCtrl///////////////////
app.controller('testCtrl', function($scope,$http){
    //debugger;
	$scope.msg = 'You are now at submited us page';
    console.log("you are in the controler testCtrl ");
    $scope.sciDirListData = {
        sciDirList: [
          {id: '1', name: 'Option A'},
          {id: '2', name: 'Option B'},
          {id: '3', name: 'Option C'}
        ]
    };
    
    $scope.update = function(){
        //var id = event.target.id;
        console.log($scope.sciDirSelected);
        $scope.researchdiv=false;
    };
	
});

app.run(['$rootScope', '$location', '$http', function ($rootScope, $location, $http) {
        console.log("you are in the run ");
    }
]);

////////////////////////////////////////////////////////