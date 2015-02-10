'use strict';
angular.module('app-services',[])
    .factory('GasProductsProvider', function($q, $http){
        return {
            /*----------------Get all the Phones from the JSON START------------------*/
            getProducts: function(){
                 var deferred = $q.defer();
                 $http.get('data/products.json').success(function(data) {
                    deferred.resolve(data);
                }).error(function(data) {
                    deferred.reject(data);
                });

                return deferred.promise;
            }
        };
    });
