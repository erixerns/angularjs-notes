let app = angular.module('myApp', [])
app.controller('myCtrl', function($scope){
	$scope.items = ['Shopping 5pm', 'Resolution', 'Asana Task 4'];
	$scope.addItem = function(){
		$scope.errortext = "";
		if(!$scope.item) return;
		if($scope.items.indexOf($scope.item) == -1)
			$scope.items.push($scope.item);
		else
			$scope.errortext = "Item already present!";
	}
	$scope.removeItem = function(item){
		$scope.errortext="";
		$scope.items.splice(item ,1);
	}
});