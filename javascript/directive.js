//create forDirective
angular.module('formDirectives',[])
.directive('ngSubValid', [function() {
  	var FOCUS_CLASS = "ng-subinvalid";
  	return {
    	restrict: 'A',
    	require: 'ngModel',
    	link: function(scope, element, attrs, ctrl) {
			scope.$watch('submitted', function() {
				if (scope.submitted && ctrl.$dirty && ctrl.$invalid) {
					element.addClass(FOCUS_CLASS);
				} else {
					element.removeClass(FOCUS_CLASS);
				}		  
			});
			element.bind('focus', function(evt) {
				element.removeClass(FOCUS_CLASS);
    		}).bind('blur', function(evt) {
        		if (scope.submitted && ctrl.$dirty && ctrl.$invalid) {
        			element.addClass(FOCUS_CLASS);
        		} else {
					element.removeClass(FOCUS_CLASS);
				}
    		});
		}
    }
.directive('makeMap', function() {
		var directive = {
			restrict: 'EA',
			templateUrl: 'templates/footer.html',
			scope: {
				map: '='
			},
			link: function(scope, element, attrs) {
				console.log("in map directive link");
			},
			controller: function mapController($scope) {
				$scope.zoomIn = function() {
					$scope.map.zoom++;
				};

				$scope.zoomOut = function() {
					$scope.map.zoom--;
				}

				$scope.mapDimensions = function() {
					if (!$scope.map.width) {
						var width = 300;
					} else {
						width = $scope.map.width;
					}

					if (!$scope.map.height) {
						var height = 300;
					} else {
						height = $scope.map.height;
					}

					return width + 'x' + height;
				}
			}
		};
		return directive;
	});
    
}]);

