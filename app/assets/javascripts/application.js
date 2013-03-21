var angularRails = angular.module('AngularRails', []);

angularRails.controller('MoviesCtrl', ['$scope', '$http', function($scope, $http){
  $scope.movies = [];
  $http.get('/movie/show.json').success(function(data){
    $scope.movies = data;
  });
}]);
