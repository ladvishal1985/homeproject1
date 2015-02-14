angular.module('envirosolutionsApp')
  .controller('ProductDetailCtrl', ['$scope','$routeParams','GasProductsProvider', 
  		function ($scope, $routeParams,$GasProductsProvider) {
	  		function getProductDetails(productId){
	            $GasProductsProvider.getProductDetails(productId).then(function(data){
	                $scope.productDetails = data;
	                $scope.mainImageUrl = data.images[0];
	           	},
	            function(errorMessage){
	              $scope.error=errorMessage;
	        	});
	      	};

	      	$scope.setImage = function(imageUrl) {
		    	$scope.mainImageUrl = imageUrl;
		  	}
	      	        
	  		getProductDetails($routeParams.productId);
  }]);