var app = angular.module("superheroApp", []);

app.directive("superhero", function () {
	return {
		restrict: "E",
		scope: {},
		controller: function($scope) {
			// console.debug("superhero controller loaded");
			$scope.abilities = [];

			this.addStrength = function() {
				$scope.abilities.push("strength");
			}

			this.addSpeed = function() {
				$scope.abilities.push("speed");
			}

			this.addFlight = function() {
				$scope.abilities.push("flight");
			}
		},

		link: function(scope, element, attrs) {
			// console.debug("superhero directive loaded");
			element.addClass("btn btn-primary");
			element.bind("mouseenter", function() {
				console.debug(scope.abilities);
			});
		}
	};
});

app.directive("strength", function() {
	return {
		restrict: "A",
		require: "superhero",
		link: function(scope, element, attrs, superheroCtrl) {
			superheroCtrl.addStrength();
		}
	}
});

app.directive("speed", function() {
	return {
		restrict: "A",
		require: "superhero",
		link: function(scope, element, attrs, superheroCtrl) {
			superheroCtrl.addSpeed();
		}
	}
});

app.directive("flight", function() {
	return {
		restrict: "A",
		require: "superhero",
		link: function(scope, element, attrs, superheroCtrl) {
			superheroCtrl.addFlight();
		}
	}
});
