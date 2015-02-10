'use strict';
angular.module('app-directives', [])
    .directive('customList', function() {
      return {
          restrict: 'E',
          replace: 'false',
          scope:{
            items: '=dataSource'
          },
          templateUrl: 'scripts/common/directives/templates/custom-list.html',
          compile:function(){}
               
        }

    });