'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [ // App container
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'firebase'
]).
config(['$routeProvider', function($routeProvider) {
	/* 	
	*	2 parameters, url path och templateUrl = html sida att ladda för hemsidan.
	* 	Controller är object för att ta hand om data på en hemsida via en scope.
	* 	Ex: Om en hemsida innehåller artiklar hämtar controller artiklarna och visar på vår
	*	hemsida
	*/
  $routeProvider.when('/messages', {
    templateUrl: 'partials/messages.html',
    controller: 'MessagesController'
  });
  $routeProvider.when('/', {
  	templateUrl: 'partials/landing_page.html',
  	controller: 'LandingPageController'
  });
  $routeProvider.when('/guestlist', {
    templateUrl: 'partials/guestlist.html',
    controller: 'GuestlistController'
  });
  $routeProvider.when('/guestcards', {
    templateUrl: 'partials/guestcards.html',
    controller: 'GuestcardsController'
  });
    $routeProvider.when('/analytics', {
    templateUrl: 'partials/analytics.html',
    controller: 'AnalyticsController'
  });
  // Annars hamna i landingpage
  $routeProvider.otherwise({redirectTo: '/'});
}]);