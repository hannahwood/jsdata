'use strict';

app.config(function($stateProvider) {

	$stateProvider.state('signup', {
		url: '/signup',
		templateUrl: 'js/signup/signup.html',
		controller: 'SignupCtrl'
	});
});

// add necessary dependencies here
app.controller('SignupCtrl', function($scope, $stateParams, User, $state, $log) {
  $scope.signup = {};

  $scope.sendSignup = function() {
    User.create({
      username: $scope.signup.username,
      password: $scope.signup.password
    })
    .then(function(newUser) {
      $state.go('create', {username: newUser.username, password: newUser.password});
    })
    .catch($log.error);
  };

  /*
  TODOS: 
  1 - create the signup object for ng-modelling
  2 - create a `sendSignup` function that
      a) persists the user data 
      b) changes the state to  'create' while sending along important user data
      (HINT: $stateParams)
  */
});