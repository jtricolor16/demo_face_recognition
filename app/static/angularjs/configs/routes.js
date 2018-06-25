(function(){
	
	'use strict';

	angular.module('RecognitionApp').config(function($routeProvider, $locationProvider) {
	    
		$locationProvider.html5Mode({
  			enabled: true,
  			requireBase: false
		});


	    $routeProvider

	    .when("/face_recognition", {
	        templateUrl : "/static/pages/home.html",
	        controller: 'IndexController',
	        controllerAs: 'ic'
	    })

	    .when("/face_recognition/recognition", {
	        templateUrl : "/static/pages/recognition.html",
	        controller: 'RecognizerController',
	        controllerAs: 'rc'
	    })

	    .when("/face_recognition/register", {
	        templateUrl : "/static/pages/user.html",
	        controller: 'UserController',
	        controllerAs:'uc'
	    })

	    .when("/face_recognition/configuration", {
	    	templateUrl:"/static/pages/configuration.html",
	    	controller:'ConfigController',
	    	controllerAs: 'cc'
	    })

	    .when("/face_recognition/edit", {
	    	templateUrl: "/static/pages/user.html",
	    	controller:'UserController',
	    	controllerAs:'uc'
	    });
	});
})();