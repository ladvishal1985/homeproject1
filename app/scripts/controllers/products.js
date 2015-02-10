'use strict';

/**
 * @ngdoc function
 * @name envirosolutionsApp.controller:ProductsCtrl
 * @description
 * # MainCtrl
 * Controller of the envirosolutionsApp
 */
angular.module('envirosolutionsApp')
  .controller('ProductsCtrl', ['$scope','GasProductsProvider', '$filter', function ($scope, $GasProductsProvider, $filter) {
    
    function getProducts(){
        $GasProductsProvider.getProducts().then(function(data){
                $scope.products = data;
            },
            function(errorMessage){
              $scope.error=errorMessage;
            });        
    }
    
    $scope.selectedCategory = [];
    $scope.categoryList = [{
        id: 'portable-gas-detector',
        name: 'Portable Gas Detector'
    }, {
        id: 'fixed-detector',
        name: 'Fixed Gas Detector'
    }, {
        id: 'control-panel',
        name: 'Control Panel'
    }];
     $scope.setSelectedClient = function (category) {
        var id = category.id,index;
        var found = $filter('getById')($scope.selectedCategory, id)
        if (found) {
            index = $scope.selectedCategory.indexOf(id)
            $scope.selectedCategory.splice(index, 1);
        } else {
            $scope.selectedCategory.pop();
            $scope.selectedCategory.push(id);
        }
        return false;
    };

    $scope.isChecked = function (id) {
        var found = $filter('getById')($scope.selectedCategory, id)
        if (found) {
            return 'icon-ok pull-right';
        }
        return false;
    };

    $scope.checkAll = function () {
       // $scope.selectedCatergory = _.pluck($scope.categoryList, 'id');
    };
    getProducts();
}]);
