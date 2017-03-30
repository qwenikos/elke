'use strict';

var app=angular.module('autocompleteApp', ['ngMaterial'])

app.controller('AutoCompleteController',
               function AutoCompleteController ($rootScope,$scope,$http,$log) {
  $rootScope.loaded=true;
  console.log("incontoler");
  var self = this;
  self.isDisabled   = false;
  var fellowId='1';
  var action='services/get_beneficiaries.php';
  var params='?fellowId='+fellowId;
  var fulURL=action+params
	$http.get(fulURL).then( //success
		function (response) {
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
         

  function insertBenef(state) {
    alert("Πρεπει να φτιάξω την function για εισαγωγή νεου ΑΦΜ" + state );
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
    
  function loadAll() {
    var benefList= [
      {value: '059946674', display: 'nikos'},
      {value: '999999999', display: 'panagiotis'},
      {value: '344566666', display: 'manolis'}
    ];
    console.log("in loadall");
    console.log('resultslocal', JSON.stringify(benefList));
    return benefList;
  }

    /*****log the data to console *******/
  function searchTextChange(text) {
    $log.info('Text changed to ' + text);
  }
  function selectedItemChange(item) {
    $log.info('Item changed to ' + JSON.stringify(item));
    if (item){
      $scope.autoAFM=item.value;
      $scope.autoName=item.display;
    }
  }
  
});





