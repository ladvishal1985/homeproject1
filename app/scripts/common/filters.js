'use strict';

/* Filters */

angular.module('app-filters', [])
	.filter('productFilter', [function () {
	    return function (clients, selectedCategory) {
	        if (!angular.isUndefined(clients) && !angular.isUndefined(selectedCategory) && selectedCategory.length > 0) {
	            var tempClients = [];
	            var i=0,len= selectedCategory !== undefined ? selectedCategory.length : 0;
	           for (; i<len; i++) {
	           		var value = selectedCategory[i];
	            	console.log(value);
	                angular.forEach(clients, function (client) {
	                    if (angular.equals(client.category, value)) {
	                        tempClients.push(client);
	                    }
	                });
	            };
	            console.log(tempClients.length);
	            return tempClients;
	        } else {
	            return clients;
	        }
	    };
	}]).
	filter('getById', function() {
	  return function(input, id) {
	    var i=0;
	    var len= input !== undefined ? input.length : 0;
	    for (; i<len; i++) {
	      if (input[i] == id) {
	        return input[i];
	      }
	    }
	    return null;
	  }
	});
