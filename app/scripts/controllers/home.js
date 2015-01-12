'use strict';

/**
 * @ngdoc function
 * @name envirosolutionsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the envirosolutionsApp
 */
angular.module('envirosolutionsApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
