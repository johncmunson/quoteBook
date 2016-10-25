angular.module('quoteApp').controller('mainController', function($scope, dataService) {

	$scope.getQuotes = function() {
		$scope.quotes = dataService.getQuotes();
	}
	$scope.getQuotes();

	$scope.addData = function(){
  		var newQuote = {
    		text: $scope.newQuoteText,
    		author: $scope.newQuoteAuthor
  		}
  		if(dataService.addData(newQuote)) {
    		$scope.newQuoteText = '';
    		$scope.newQuoteAuthor= '';
  		}
	}

	$scope.removeData = function(quoteText) {
		dataService.removeData(quoteText);
	}

})