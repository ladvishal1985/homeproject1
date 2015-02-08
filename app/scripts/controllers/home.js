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
    
  	/*-----Slides----------*/

  	var slides = $scope.slides = [
  		{image: '../images/banner1.jpg', text:''},
  		{image: '../images/banner2.jpg', text:''},
  		{image: '../images/banner3.jpg', text:''},
  		{image: '../images/banner4.jpg', text:''},
  	];
  	/*$scope.addSlide = function() {
	   slides.push({
		    image: '../images/banner1.jpg',
		    text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' 
		      +['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
	    });
	};
    for (var i=0; i<4; i++) {
	   $scope.addSlide();
	}*/
	  
  });
