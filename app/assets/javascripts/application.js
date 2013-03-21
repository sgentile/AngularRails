//= require angular
//= require angular-resource
//= require services/moviesService
//= require controllers/movies

angular.module('AngularRails', ['moviesService'])
  .config(['$routeProvider', function($router){
    $router
      .when('/movies/show', {templateUrl:'/movies/show.html', controller:MoviesCtrl})
      .otherwise({redirectTo: '/movies/show'});
  }]);
