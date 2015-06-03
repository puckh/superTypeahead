angular.module('mgcrea.ngStrapDocs', [])
  .directive('sampleDirective', function ($timeout) {
  return {
      restrict: 'A',
	  scope: {
        timeInterval: '@',
		datajson: '@'
      },
      link: function (scope, elem, attrs) {
		console.log(scope.timeInterval);
		attrs.$observe('timeInterval', function(value) {
			console.log('timeInterval has changed value to ' + value);
			scope.firstvalue = value;
		  });
		attrs.$observe('datajson', function(value) {
			console.log('datajson has changed value to ' + value);
			scope.secondvalue = value;
		  });
		console.log(scope.firstvalue);
		  
		
		var t = $timeout( function() { 
		    scope.firstvalue = 'new--' + ' and old--1' ;
			scope.secondvalue = 'new--' + ' and old--2' ;
			
		}, 2000);
      }
	  
    }
  });
  
  
  