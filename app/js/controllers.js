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

  	$scope.newGuest = {name: '', age: '', gender: '', city: '', country: '', checkedIn: ''};

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

    $('#guestModal').on('show.bs.modal', function (event) {
        var tableRow = $(event.relatedTarget) // Button that triggered the modal
        var guest = tableRow.data('guest') //fetch data-guest=">>this stuff<<"
        //^funkar inte
        var modal = $(this)
        modal.find('.name').text("Info about " + guest.name + ":")
        modal.find('.age').text("Age: " + guest.age)
        modal.find('.gender').text("Gender: " + guest.gender)
        modal.find('.city').text("City: " + guest.city)
        modal.find('.country').text("Country: " + guest.country)
        modal.find('.checkedin').text( (guest.checkedIn == 'true') ? "Checked in" : "Not checked in")
    })
  }])

    .controller('MessagesController', ['$scope', '$firebase', '$location', function($scope, $firebase, $location) {
  	// Skapa en referens till firebaseapplikationen
  	var guestsRef = new Firebase('https://guestdo-tim.firebaseio.com/');

  	// Passa referensen till firebase service
  	$scope.guests = $firebase(guestsRef);

  	$scope.newGuest = {name: '', age: '', gender: '', city: '', country: '', checkedIn: 'false'};
  }])
  ;