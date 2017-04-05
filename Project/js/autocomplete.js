'use strict';

var app=angular.module('autocompleteApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

app.controller('AutoCompleteController',
               function AutoCompleteController ($rootScope,$scope,$http,$log,$mdDialog) {

	$rootScope.loaded=true;
	$scope.disable_benef_input=true;
	console.log("in the contoller");
	var self = this;
	$scope.sub_div_add_beneficiary=false;
	self.isDisabled   = false;
	var fellowId='1';
	var action='services/get_beneficiaries.php';
	var params='?fellowId='+fellowId;
	var fulURL=action+params
	$http.get(fulURL).then( //success
		function (response) {
			console.log("in the httpGet");
			$scope.posts =  response.data;
			self.states=$scope.posts;
			self.querySearch   = querySearch;
			self.selectedItemChange = selectedItemChange;
			self.searchTextChange   = searchTextChange;
			//create new beneficiary
			self.insertBenef = insertBenef;
		  },
		  function (response) { //fail
			  $scope.error="error in proccessing";
		  }
	  );
	  
	$scope.save_new_benef=function(){
		console.log("save new benef to database");
		$scope.close();
	};
	
	$scope.close = function() {
	  $mdDialog.hide();
	};
	
	//$scope.insertBenef = function (event)  {
	//	console.log("in $scope.insertBenef ");
	//	$mdDialog.show({
	//		scope: $scope,
	//		preserveScope: true,
	//		controller: 'AutoCompleteController',
	//		templateUrl: 'pages/insert_new_benef_dialog.html'
    //    });
	//};
	
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
	  var results;
	  if (query){
		results=self.states.filter( createFilterFor(query));
	  }else{
	   results= self.states;
	  }
	  return results; 
	}
  
	function createFilterFor(query) {
	  return function filterFn(benef) {
		return (benef.value.indexOf(query) === 0);
		
	  };
	}


	function searchTextChange(text) {
		// $log.info('Text changed to ' + text);
		 //console.log(text.length);
		 if (text.length==11) {
			 //alert("pssss");
		}
	
	}
	
	function selectedItemChange(item) {
		//$log.info('Item changed to ' + JSON.stringify(item));
		if (item){
			$scope.autoAFM=item.value;
			$scope.autoName=item.display;
			$scope.disable_benef_input=true;
		}
	}
  
});









