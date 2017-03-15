

angular.module('routing_module')
////////////// whole Application Controller   //////////////////
.controller('ApplicationController', function($scope,$rootScope){
	$scope.userLoggedId =$rootScope.userid;
	console.log($rootScope.userid);
});
