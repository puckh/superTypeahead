var app = angular.module('mgcrea.ngStrapDocs', ['ngAnimate', 'ngSanitize', 'mgcrea.ngStrap']);

app.controller('TypeaheadDemoCtrl', function($scope, $templateCache, $http) {});

app.directive('superTypeahead', function() {
  return {
    restrict: 'E',
    scope: false,
    templateUrl: 'template.html',
    link: function(scope, element, attr) {

      'use strict';



      scope.icons = [{
        value: 'Gear',
        label: '<i class="fa fa-gear"></i> Gear'
      }, {
        value: 'Globe',
        label: '<i class="fa fa-globe"></i> Globe'
      }, {
        value: 'Heart',
        label: '<i class="fa fa-heart"></i> Like'
      }, {
        value: 'Camera',
        label: '<i class="fa fa-camera"></i> Camera'
      }];
      scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

      //$scope.myVar;
      scope.myLength;
      scope.myLength2 = 0;

      scope.$watch('boxOne', function() {

        if (scope.boxOne) {
          scope.myLength = (scope.boxOne.length + 1) * 8;
        }

        if (scope.boxOne) {
          scope.myLength = (scope.boxOne.length + 1) * 8;
          var value = scope.boxOne.toString();
          if (value.charAt(value.length - 1) === '.') {
            scope.myLength2 = 8;
            second.focus();
          }
        }
      });



      scope.myFunction = function(event) {

        var x = event.keyCode;
        if ((x == 8 && typeof scope.boxTwo === "undefined") || (x == 8 && scope.boxTwo.length === 0)) {

          var tempBoxOne = scope.boxOne.toString();

          console.log("original:" + tempBoxOne);

          tempBoxOne = (tempBoxOne.substring(0, tempBoxOne.length - 1));

          console.log(">>>>>>>>>then:" + tempBoxOne);

          scope.boxOne = tempBoxOne;

          first.focus();
        }

      };


      scope.clickeddiv = function() {
        if (!scope.boxTwo && scope.boxOne) {
          first.focus();
        } else if (scope.boxOne && scope.boxTwo) {
          second.focus();
        } else if (!scope.boxTwo && !scope.boxOne) {
          first.focus();
        }
      };

      scope.infocus = function() {
        document.getElementById('mydiv').classList.add('super-typeahead-focus');
      }
      scope.outfocus = function() {
        document.getElementById('mydiv').classList.remove('super-typeahead-focus');
      }


      scope.myFunctionOne = function(event) {
        if ((scope.boxOne.length === 1)) {
          scope.myLength = (scope.boxOne.length + 10) * 8;
        }
      }

      scope.$watch("boxTwo", function() {

        if (scope.boxTwo) {
          scope.myLength2 = (scope.boxTwo.length + 1) * 8;
        }

        if (scope.boxTwo === "") {


          var tempBoxOne = scope.boxOne.toString();

          if (tempBoxOne.charAt((tempBoxOne.length) - 1) === ".") {
            tempBoxOne = (tempBoxOne.substring(0, tempBoxOne.length - 1));
            scope.boxOne = tempBoxOne;

            first.focus();
          }


        }
      });



    }
  };
});