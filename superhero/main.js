var app = angular.module('superhero', []);

app.directive('superman', function() {
	return {
		restrict: "A",
		link: function(scope, element, attrs) {
			console.debug("superman directive loaded: Stronger");
		}
	};
});

app.directive('flash', function() {
	return {
		restrict: "A",
		link: function(scope, element, attrs) {
			console.debug("flash directive loaded: Faster");
		}
	};
});

