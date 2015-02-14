'use strict';
angular.module('app-services',['app-models'])
    .factory('GasProductsProvider', function($q, $http, AppModels){
        
        var getSelectedProduct = function(productId){
            var i, len = AppModels.productsList.length, productDetails;
            for(i = 0; i < len; i++){
                if(AppModels.productsList[i]["id"] == productId){
                    productDetails = AppModels.productsList[i];
                    break;
                }
            }
            return productDetails;
        }
        return {
            /*----------------Get all the Phones from the JSON START------------------*/
            getProducts: function(){
                 var deferred = $q.defer();
                 $http.get('data/products.json').success(function(data) {
                    AppModels.productsList = data;
                    deferred.resolve(data);
                }).error(function(data) {
                    deferred.reject(data);
                });

                return deferred.promise;
            },
            getProductDetails: function(productId){
                var productDetails;
                 var deferred = $q.defer();
                 if(AppModels.productsList == undefined || AppModels.productsList.length == 0){
                     $http.get('data/products.json').success(function(data) {
                        AppModels.productsList = data;
                        productDetails = getSelectedProduct(productId);
                        deferred.resolve(productDetails);
                    }).error(function(data) {
                        deferred.reject(data);
                    });
                }
                else{
                    productDetails = getSelectedProduct(productId);
                    deferred.resolve(productDetails);
                }

                return deferred.promise;
            }
        };
    });
