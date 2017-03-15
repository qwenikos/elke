'use strict';

// declare modules
angular.module('ElkeDocAppEntoli',[])
angular.module('Authentication', []);

angular.module('ElkeDocApp', ['Authentication','ngRoute','ngCookies'])

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
            controller: '',
            templateUrl: 'pages/home.html'
            //templateUrl: 'index1.html'
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
    }]);



