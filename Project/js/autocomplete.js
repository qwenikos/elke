'use strict';
var app=angular.module('autocompleteApp', ['ngMaterial']);

app.controller('AutoCompleteController', AutoCompleteController);
  function AutoCompleteController ($scope,$timeout, $q, $log) {
    var self = this;
    self.simulateQuery = false;
    self.isDisabled    = false;
    // list of `state` value/display objects
    self.states        = loadAll();
    $scope.states=self.states ;
    self.querySearch   = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange   = searchTextChange;
    self.newState = newState;

    function newState(state) {
      alert("Πρεπει να φτιάξω την function για εισαγωγή νεου ΑΦΜ" + state );
    }

    // ******************************
    // Internal methods
    // ******************************

    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      var results = query ? self.states.filter( createFilterFor(query) ) : self.states,
          deferred;
      if (self.simulateQuery) {
        deferred = $q.defer();
        $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
        return deferred.promise;
      } else {
        return results;
      }
    }
    
    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
      var sciDirList= [
        {value: '059946674', display: 'nikos'},
        {value: '999999999', display: 'panagiotis'},
        {value: '344566666', display: 'manolis'}
      ];
      return sciDirList;
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      return function filterFn(state) {
        return (state.value.indexOf(query) === 0);
      };

    }
    /*****log the data to console *******/
    function searchTextChange(text) {
      $log.info('Text changed to ' + text);
    }

    function selectedItemChange(item) {
      $log.info('Item changed to ' + JSON.stringify(item));
    }
  }

