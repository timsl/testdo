'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('LandingPageController', [function() {

  }])
  .controller('GuestlistController', ['$scope', '$firebase', '$location', function($scope, $firebase, $location) {
  	// Skapa en referens till firebaseapplikationen
  	var guestsRef = new Firebase('https://guestdo-tim.firebaseio.com/guests');

  	// Passa referensen till firebase service
  	$scope.guests = $firebase(guestsRef);

  	$scope.newGuest = {name: '', number: '', checkedIn: ''};

  	$scope.saveGuest = function() {
  		// Add data till firebase
  		$scope.guests.$add($scope.newGuest);
  		$scope.newGuest = {name: '', number: '', checkedIn: ''};
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
        modal.find('.number').text("Number: " + guest.number)
        modal.find('.checkedin').text( (guest.checkedIn == 'true') ? "Checked in" : "Not checked in")
    })
  }])

  .controller('MessagesController', ['$scope', '$firebase', '$location', function($scope, $firebase, $location) {
  	// Skapa en referens till firebaseapplikationen
  	var guestsRef = new Firebase('https://guestdo-tim.firebaseio.com/guests');

  	// Passa referensen till firebase service
  	$scope.guests = $firebase(guestsRef);

  	$scope.newGuest = {name: '', number: '', checkedIn: ''};

    // Skicka sms!
    $scope.sendSMS = function(guest, messageFrom) {
      console.log(messageFrom)
      var smsRef = new Firebase('https://guestdo-tim.firebaseio.com/sms');
      var sms = $firebase(smsRef);
      sms.$add({Number: guest.number, Message: messageFrom});
    };

  }])

  .controller('GuestcardsController', ['$scope', '$firebase', '$location', function($scope, $firebase, $location) {
    // Skapa en referens till firebaseapplikationen
    var guestsRef = new Firebase('https://guestdo-tim.firebaseio.com/guests');

    // Passa referensen till firebase service
    $scope.guests = $firebase(guestsRef);

    $scope.newGuest = {name: '', number: '', checkedIn: ''};
    
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
        modal.find('.number').text("Number: " + guest.number)
        modal.find('.checkedin').text( (guest.checkedIn == 'true') ? "Checked in" : "Not checked in")
    })
  }])


  ;