'use strict';
var app=angular.module('autocompleteApp', ['ngMaterial']);

app.controller('AutoCompleteController', AutoCompleteController);
  function AutoCompleteController ($scope,$timeout, $q, $log) {
    var self = this;
    self.simulateQuery = false;
    self.isDisabled    = false;
    // list of `state` value/display objects
    self.states = loadAll();
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
      return benefList;
    }

    
    
    
    /*****log the data to console *******/
    function searchTextChange(text) {
      $log.info('Text changed to ' + text);
    }

    function selectedItemChange(item) {
      $log.info('Item changed to ' + JSON.stringify(item));
    }
  }

