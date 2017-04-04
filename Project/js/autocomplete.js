'use strict';

var app=angular.module('autocompleteApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

app.controller('AutoCompleteController',
               function AutoCompleteController ($rootScope,$scope,$http,$log,$mdDialog) {
  $rootScope.loaded=true;
  $scope.disable_benef_input=true;
  console.log("incontoler");
  var self = this;
  $scope.sub_div_add_beneficiary=false;
  console.log($scope.sub_div_add_beneficiary)
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

	
  function insertBenef($state,$event)  {
		console.log($event);
        $mdDialog.show({
          targetEvent: $event,
          template:
            '<md-content>'+
				'<form name=newBenefForm>'+
					'<md-input-container>'+
						'<label>Α.Φ.Μ</label>'+
						'<input md-maxlength=10 required name=newBenefAfmField ng-model=new_benef_afm>'+
						'<div ng-messages=newBenefForm.newBenefAfmField.$error><div ng-message=required>Υποχρεωτικό πεδίο</div></div>'+
						'<!--<div ng-message=md-maxlength>Το ονομα πρέπει να είναι το πολύ 10 χαρακτήρες</div>-->'+
					'</md-input-container>'+
					'<md-input-container>'+
					'<md-input-container>'+
						'<label>Ονομα</label>'+
						'<input md-maxlength=30 required name=newBenefnameField ng-model=new_benef_name>'+
						'<div ng-messages=newBenefForm.newBenefnameField.$error><div ng-message=required>Υποχρεωτικό πεδίο</div></div>'+
						'<!--<div ng-message=md-maxlength>Το ονομα πρέπει να είναι το πολύ 30 χαρακτήρες</div>-->'+
					'</md-input-container>'+
					'<md-input-container>'+
						'<label>Επίθετο</label>'+
						'<input md-maxlength=30 required name=newBenefSurnameField ng-model=new_benef_surname>'+
						'<div ng-messages=newBenefForm.newBenefSurnameField.$error><div ng-message=required>Υποχρεωτικό πεδίο</div></div>'+
					'</md-input-container>'+
					'<md-button type="submit">Υποβολή</md-button>'+
				'</form>'+
			'</md-content>'
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


    /*****log the data to console *******/
  function searchTextChange(text) {
    $log.info('Text changed to ' + text);
	console.log(text.length);
	if (text.length==9) {
		//alert("fsdafad");
	};
  }
  function selectedItemChange(item) {
    $log.info('Item changed to ' + JSON.stringify(item));
    if (item){
      $scope.autoAFM=item.value;
      $scope.autoName=item.display;
	  $scope.disable_benef_input=true;
    }
  }
  
  $scope.IsVisible = false;
	$scope.ShowHide = function () {

	};

});

app.directive('focusOnShow', function($timeout) {
    return {
        restrict: 'A',
        link: function($scope, $element, $attr) {
            if ($attr.ngShow){
                $scope.$watch($attr.ngShow, function(newValue){
                    if(newValue){
                        $timeout(function(){
                            $element[0].focus();
                        }, 0);
                    }
                })      
            }
            if ($attr.ngHide){
                $scope.$watch($attr.ngHide, function(newValue){
                    if(!newValue){
                        $timeout(function(){
                            $element[0].focus();
                        }, 0);
                    }
                })      
            }

        }
    };
})








