//= require angular
//= require angular-resource
//= require services/moviesService
//= require controllers/movies

angular.module('AngularRails', ['moviesService'])
  .config(['$routeProvider', function($router){
    $router
      .when('/movies', {templateUrl:'/movies/index.html', controller:MoviesCtrl})
      .when('/movies/:movie_id', {templateUrl:'/movies/show.html', controller:MovieShowCtrl})
      .when('/movies/:movie_id/edit', {templateUrl:'/movies/edit.html', controller: MovieEditCtrl})
      .otherwise({redirectTo: '/movies'});
  }]);
