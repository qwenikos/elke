'use strict';

var app=angular.module('insertBenefApp', ['ngMaterial'])
app.controller('empcontroller', function ($scope, $http) {
/*
* This method will be called on click event of button.
*/
    $scope.postData = function () {
        console.log("in the js");
        var request = $http({
            method: "post",
            url: "services/insert_new_benef.php",
            data: {
                benef_name: $scope.benef_name,
                benef_surname: $scope.benef_surname,
                benef_afm: $scope.benef_afm,
                benef_desc: $scope.benef_desc,
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
        console.log($scope.benef_name);
        console.log("end");
    };
}); 