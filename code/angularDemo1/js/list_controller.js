var list = angular.module('myList', []); 
 
list.controller('ButtonController', ['$scope', function($scope) {
  	$scope.count = 0; 
  
	$scope.incrementCount = function (){
		$scope.count++
	}

	$scope.clearCount = function () {
		$scope.count= 0
	}
}]) 
  
list.controller('ListController', ListController); 
function ListController($scope){
	$scope.listItems = [
		{
			'des' 	: 	'First Item',
			'val' 	: 	1
		},
		{
			'des' 	: 	'Second Item',
			'val' 	: 	2
		},
		{
			'des' 	: 	'Third Item',
			'val' 	: 	3
		},
		{
			'des' 	: 	'Fourth Item',
			'val' 	: 	4
		},
		{
			'des' 	: 	'Fifth Item',
			'val' 	: 	5
		} ,
		{
			'des' 	: 	'Sixth Item',
			'val' 	: 	6
		} ,
		{
			'des' 	: 	'Seventh Item',
			'val' 	: 	7
		} ,
		{
			'des' 	: 	'Eighth Item',
			'val' 	: 	8
		} ,
		{
			'des' 	: 	'Ninth Item',
			'val' 	: 	9
		} ,
		{
			'des' 	: 	'Tenth Item',
			'val' 	: 	10
		} 
	]
}
ListController.$inject = ['$scope'];

