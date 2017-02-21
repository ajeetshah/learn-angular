var app = angular.module("twitterApp", []);

app.controller("twitterCtrl", function($scope) {
	$scope.loadMoreTweets = function() {
		console.debug("loading more tweets");
	}

	$scope.deleteTweets = function () {
		console.debug("deleting tweets");
	};
});

app.directive("enter", function() {
	return function (scope, element, attrs) {
		element.bind("mouseenter", function () {
			console.debug("inside");
			scope.$apply(attrs.enter);
			// scope.$apply("loadMoreTweets()");
			// scope.loadMoreTweets();
		});
	};
});
