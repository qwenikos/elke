'use strict';
var app=angular.module('autocompleteApp', ['ngMaterial']);


app.factory('myService', function($rootScope,$q, $timeout, $http) {
  return {
    myMethod: function() {
      // return the same promise that $http.get returns
      return $http.get('services/get_beneficiaries.php');
      $rootScope.loaded=true;
    }
  };
});

app.controller('AutoCompleteController', AutoCompleteController);
  function AutoCompleteController ($q,$rootScope,$scope,$http,$log,myService) {
    $rootScope.loaded=true;
    console.log("incontoler");
    var self = this;
    self.simulateQuery = false;
    self.isDisabled    = false;

    myService.myMethod().then(function(resp) {
      $scope.result = resp.data;
      console.log("$scope.result-->"+$scope.result);
    });
    self.states = $scope.benefList;
    $scope.states=self.states ;
    self.querySearch   = querySearch;
    //log
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange   = searchTextChange;
    //create new beneficiary
    self.insertBenef = insertBenef;

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
    
    /**
     * Build `states` list of key/value pairs
     */
    
    
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
  }
;



