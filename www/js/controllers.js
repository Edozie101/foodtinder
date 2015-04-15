angular.module('starter.controllers', [])


.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  var cardTypes = [
      { id: 0,image: 'img/chickensalad.jpg', title: 'Chicken Ceaser Salad', price: "$10.99",  cuisine: 'American', logo: 'img/silvergreenslogo.jpg'},
      { id: 1,image: 'img/chickentenders.jpg', title: 'Chicken Tenders', price: "$6.99",  cuisine: 'American' , logo: 'img/southcoastdeli.jpg'},
      { id: 2,image: 'img/rainbowcake.jpg', title: 'Slice of Rainbow Cake', price: "$3.99", logo: 'img/crushcakes_logo.png'},
      { id: 3,image: 'img/hamcheeseegglettuce.jpg', title: 'Ham Cheese Egg Sandwich', price: "$7.99",  cuisine: 'American', logo: 'img/southcoastdeli.jpg'},
      { id: 4,image: 'img/garlicsteak.jpg', title: 'Garlic Steak 6oz', price: "$7.99",  cuisine: 'American', logo: 'img/chilislogo.jpg'},
      { id: 5,image: 'img/strawberrycarameloreo.jpg', title: 'Strawberry Caramel Oreo', price: "$4.99", logo: 'img/crushcakes_logo.png' },
      { id: 6,image: 'img/turkeysandwich.jpg', title: 'Turkey Sandwich', price: "$4.99",  cuisine: 'American',logo: 'img/southcoastdeli.jpg'},
      { id: 7,image: 'img/qpwcheese.png', title: 'QP with Cheese', price: "$3.99", cuisine:'American', logo:'img/Mcdicon.png'},
      { id: 8,image: 'img/Freebirdsburito.jpg', title: 'Burrito', price: "$5.99" , cuisine: 'Mexican',restaurant: 'Freebirds', logo: 'img/freebirdslogo.png' },
      { id: 9,image: 'img/Freebirdsnachos.jpg', title: 'Nachos', price: "$5.99" ,  cuisine: 'Mexican' , restaurant: 'Freebirds', logo: 'img/freebirdslogo.png' },
      { id: 10,image:'img/tacos.jpg',           title: 'Tacos', price: "$5.99" , cuisine: 'Mexican' , restaurant: 'Freebirds', logo: 'img/freebirdslogo.png' },
      { id: 11,image: 'img/McdFries.jpg', title: 'Medium Fries', price: "$1.99", cuisine:'American',restaurant: 'Mcdonalds', logo:'img/Mcdicon.png'},
      { id: 12,image: 'img/sesame-salad.jpg', title: 'Sesame Seared Ahi Salad', price: "$19.99",  cuisine: 'Mexican', logo: 'img/silvergreenslogo.jpg'},


  ];


  $scope.cards = [];

  $scope.addCard = function(i) {
      var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
      newCard.id = Math.random();
      $scope.cards.push(angular.extend({}, newCard));
  }

  for(var i = 0; i < 3; i++) $scope.addCard();

  $scope.cardSwipedLeft = function(index) {
      console.log('Left swipe');
  }

  $scope.cardSwipedRight = function(index) {
      console.log('Right swipe');
  }

  var dCounter = 0

  $scope.cardDestroyed = function(index) {
      $scope.cards.splice(index, 1);
      console.log('Card removed');
      dCounter += 1
      console.log(dCounter);
      if ((dCounter % 3) == 0) {
        for(var i = 0; i < 3; i++) {
          $scope.addCard();
        }
      }
  }

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Silvergreens', id: 1 },
    { title: 'Freebirds', id: 2 },
    { title: 'Mcdonalds', id: 3 },
    { title: 'Chrushcakes Cafe', id: 4 },
    { title: 'Chilis', id: 5 },
    { title: 'Southcoast Deli', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
