angular.module('quoteApp').controller('mainController', function($scope, dataService) {

	$scope.getQuotes = function() {
		$scope.quotes = dataService.getQuotes();
	}
	$scope.getQuotes();

	$scope.addData = function(quote) {
		dataService.addData(quote);
	}

	$scope.removeData = function(quoteText) {
		dataService.removeData(quoteText);
	}

})