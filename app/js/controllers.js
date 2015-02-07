'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('LandingPageController', [function() {

  }])
  .controller('GuestlistController', ['$scope', '$firebase', function($scope, $firebase) {
  	// Skapa en referens till firebaseapplikationen
  	var guestsRef = new Firebase('https://guestdo-tim.firebaseio.com/');

  	// Passa referensen till firebase service
  	$scope.guests = $firebase(guestsRef);

  	$scope.guest = {name: '', age: '', gender: '', city: '', country: ''};

  	$scope.saveGuest = function() {
  		// Add data till firebase
  		$scope.guests.$add($scope.guest);
  		$scope.guest = {name: '', age: '', gender: '', city: '', country: ''};
  	}
  }]);