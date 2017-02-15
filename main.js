var myApp = angular.module('myApp', []);

myApp.factory('Data', function() {
	return {message: "I am a data from service"};
});
myApp.factory('Avengers', function() {
	var Avengers = {};
	Avengers.cast = [
		{
			name: "Robert Downey1",
			character: "Iron Man1"
		},	
		{
			name: "Robert Downey2",
			character: "iron man2"
		},	
		{
			name: "Robert Downey3",
			character: "Iron Man3"
		},	
		{
			name: "Robert Downey4",
			character: "Iron Man4"
		},	
		{
			name: "Chris Ivan",
			character: "Steve Rogers"
		},	
		{
			name: "Mark Ruffalo",
			character: "The Hulk"
		},	
		{
			name: "Clark Gregg",
			character: "Agent Phil Coulson"
		}



	];
	return Avengers;
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
myApp.controller('AvengersCtrl', function($scope, Avengers) {
	$scope.avengers = Avengers;
});

