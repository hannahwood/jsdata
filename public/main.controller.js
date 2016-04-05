'use strict';

app.config(function($stateProvider) {
    $stateProvider.state('main', {
        url: '/',
        templateUrl: '/main.html',
        controller: 'MainController',
        resolve: {
            users: function(User) {
                return User.findAll();
            },
            posts: function(Post) {
                return Post.findAll();
            }
        }
    });
});

app.controller('MainController', function($scope, posts, Post) {
    $scope.allPosts = posts;
   var postData = Post.getAll()
Post.ejectAll() // removes all the posts from the data store
Post.inject(postData)  // adds them back
console.log(Post.getAll())


    /*
		TODOS: 
		1 - use js-data to retrieve all users and all posts
		(HINT: if you want to be fancy, add a resolve block to this state 
		and retrieve the data there)

 	*/
});
