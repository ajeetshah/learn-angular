var myApp = angular.module('myApp', []);

myApp.factory('Data', function() {
	return {message: "I am a data from service"};
});

myApp.filter('reverse', function(Data) {
	return function(text){
		return text.split("").reverse().join("") + " " + Data.message;
	};
});

myApp.controller('firstCtrl', function($scope, Data){
	$scope.data = Data;
});

myApp.controller('secondCtrl', function($scope, Data){
	$scope.data = Data;
});

