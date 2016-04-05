'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('create', {
		url: '/create/:userId',
		templateUrl: 'js/create/create.html',
		controller: 'CreateCtrl' ,
		resolve: {
			author: function(User, $stateParams) {
				console.log($stateParams.username);
				return User.findAll({username: $stateParams.username});
			}
		}
		/*
				add a resolve block that has an author function which 
				users $stateParams to retrieve the author object
		*/
	});
});

// add necessary dependencies here 
app.controller('CreateCtrl', function($scope, author, Post, $state, $log) {

	console.log('author:', author);

	$scope.newPost = {
		username: author.username
	};

	$scope.createPost = function() {
	     var creationObj = {
	     	author: author._id,
	        title: $scope.newPost.title,
	        body: $scope.newPost.body
	     };
	     console.log(creationObj);

	    Post.create({
	        author: author._id,
	        title: $scope.newPost.title,
	        body: $scope.newPost.body
	    })
	    .then(function(newPost) {
	        console.log(newPost);
	        $state.go('main');
	    })
	    .catch($log.error);
	};

	$scope.previewTrue = false;

	$scope.preview = function() {
		$scope.previewTrue = !$scope.previewTrue;
	};




	/*

	TODOS: 
	1 - create the object that the form can use via ng-model
  2 - create a function that 
	 		a) persists the ng-modeled post object 
			b) changes the state to 'main'  

	*/
	
}) 