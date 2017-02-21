var app = angular.module('behaviorApp', []);

app.directive('enter', function() {
	return {
		restrict: "A",
		template: "<div><p>I am made in enter directive</p></div>",
		link: function() {
			console.debug("enter directive loaded");

			var hello = function () {
				console.debug("Hello World");
			}

			hello();
		}
	};
});

app.directive('enter2', function() {
	return function(scope, element, attrs) {
		element.bind("mouseenter", function() {
			console.debug("I am inside of you!");
			element.addClass(attrs.enter2);
		});
	};
});

app.directive("leave", function() {
	return function (scope, element, attrs) {
		element.bind("mouseleave", function() {
			console.debug("I am not outside of you!!");
			element.removeClass(attrs.enter2);
		});
	}
});
