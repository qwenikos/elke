'use strict';


var app=angular.module('testApp', [])

///////// Create Controller with name submitedCtrl///////////////////
app.controller('testCtrj', function($scope,$http){
    //debugger;
	$scope.msg = 'You are now at submited us page';
    console.log("you are in the controler testCtrl ");
	
});

app.run(['$rootScope', '$location', '$http', function ($rootScope, $location, $http) {
        console.log("you are in the run ");
    }
]);

////////////////////////////////////////////////////////