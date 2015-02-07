'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('LandingPageController', [function() {

  }])
  .controller('GuestlistController', ['$scope', '$firebase', '$location', function($scope, $firebase, $location) {
  	// Skapa en referens till firebaseapplikationen
  	var guestsRef = new Firebase('https://guestdo-tim.firebaseio.com/');

  	// Passa referensen till firebase service
  	$scope.guests = $firebase(guestsRef);

  	$scope.newGuest = {name: '', age: '', gender: '', city: '', country: '', checkedIn: 'false'};

  	$scope.saveGuest = function() {
  		// Add data till firebase
  		$scope.guests.$add($scope.newGuest);
  		$scope.newGuest = {name: '', age: '', gender: '', city: '', country: '', checkedIn: ''};
  	}

  	$scope.login = function() {
  		$location.path('/guestlist');
  	}

  	$scope.checkinGuest = function(guest) {
  		guest.checkedIn = 'true';
  		$scope.guests.$save(guest.$id);
  	}

    $scope.checkoutGuest = function(guest) {
      guest.checkedIn = 'false';
      $scope.guests.$save(guest.$id);
    }
  }])

    .controller('MessagesController', ['$scope', '$firebase', '$location', function($scope, $firebase, $location) {
  	// Skapa en referens till firebaseapplikationen
  	var guestsRef = new Firebase('https://guestdo-tim.firebaseio.com/');

  	// Passa referensen till firebase service
  	$scope.guests = $firebase(guestsRef);

  	$scope.newGuest = {name: '', age: '', gender: '', city: '', country: '', checkedIn: 'false'};
  }])
  ;

