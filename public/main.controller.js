'use strict';

app.config(function($stateProvider) {
    $stateProvider.state('main', {
        url: '/',
        templateUrl: '/main.html',
        controller: 'MainController',
        resolve: {
            users: function(User) {
            	console.log('in users');
                return User.findAll();
            },
            posts: function(Post) {
                return Post.findAll();
            }
        }
    });
});

app.controller('MainController', function($scope) {
    // $scope.allPosts = posts;
    console.log('in controller');
    /*
		TODOS: 
		1 - use js-data to retrieve all users and all posts
		(HINT: if you want to be fancy, add a resolve block to this state 
		and retrieve the data there)

 	*/
});
