'use strict';

var app=angular.module('autocompleteApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

app.controller('AutoCompleteController',
               function AutoCompleteController ($rootScope,$scope,$http,$mdDialog) {


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
	$scope.save_new_benef=function(){
		console.log("save new benef to database");
		$scope.mytestdata='nikos';
		$mdDialog.hide();
	};
	console.log("ENDDD");
	function insertBenef ($event) {
		console.log("in insertBenef function");
		$mdDialog.show({
			scope: $scope,
			preserveScope: true,
			controller: 'AutoCompleteController',
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
			$scope.new_benef_name=item.display;
			$scope.new_benef_afm=item.value;
			$scope.disable_benef_input=true;
		}
	}
});









